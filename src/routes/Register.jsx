import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import FormError from "../components/FormError"
import FormInput from "../components/FormInput"
import Title from "../components/Title"
import Button from "../components/Button"
import ButtonLoading from "../components/ButtonLoading"

import { UserContext } from "../context/UserProvider"

import { erroresFirebase } from "../utils/erroresFirebase"
import { formValidate } from "../utils/formValidate"

const Register = () => {
  const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const {register, handleSubmit, getValues, setError, formState : {errors}} = useForm()
    const {required, patternEmail, minLength, validateTrim, validateEquals} = formValidate()

    const {registerUser} = useContext(UserContext)

    const onSubmit = async({email, password}) => {
        try {
            setLoading(true)
            await registerUser(email,password)
            console.log('Usuario creado')
            navigate('/')
        } catch (error) {
            console.log(error.code)
            const { code, message } = erroresFirebase(error.code)
            setError(code,{message})
        } finally {
          setLoading(false)
        }
    }

  return (
    <div>
      <Title text={'Register'}/>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormInput
          type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label='Ingresa tu correo'
          error={errors.email}
        >
        <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
          label='Ingresa tu password'
          error={errors.password}
        >
        <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingrese Password"
          {...register("repassword", {
            validate: validateEquals(getValues('password')),
          })}
          label='Repite tu password'
          error={errors.repassword}
        >
        <FormError error={errors.repassword} />
        </FormInput>
          {
            loading
            ? <ButtonLoading /> 
            : <Button type={'submit'} text={'Registrarse'}/>
          }
      </form>
    </div>
  );
}

export default Register
