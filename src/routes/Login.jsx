import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import FormError from "../components/FormError"
import FormInput from "../components/FormInput"
import Title from "../components/Title"
import { UserContext } from "../context/UserProvider"
import { erroresFirebase } from "../utils/erroresFirebase"
import { formValidate } from "../utils/formValidate"

const Login = () => {

  const {loginUser} = useContext(UserContext)
  const navigate = useNavigate()
  const {register, handleSubmit, setError, formState : {errors}} = useForm()
  const {required, patternEmail, minLength, validateTrim } = formValidate()


  const onSubmit = async({email, password}) => {
    try {
        await loginUser(email,password)
        console.log('Usuario loggueado correctamente')
        navigate('/')
    } catch (error) {
        console.log(error.code)
        const { code, message } = erroresFirebase(error.code)
        setError(code,{message})
    }
}

  return (
    <div>
      <Title text={'Login'}/>
      <form onSubmit={handleSubmit(onSubmit)}>

      <FormInput
          type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
          label='Ingresa tu email'
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

          <Button type={'submit'} text={'Ingresar'}/>
      </form>
    </div>
  )
}

export default Login
