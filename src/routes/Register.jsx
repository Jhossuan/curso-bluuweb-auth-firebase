import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Register = () => {

    const navigate = useNavigate()
    const {register, handleSubmit, getValues, setError, formState : {errors}} = useForm()
    
    const {registerUser} = useContext(UserContext)

    const onSubmit = async({email, password}) => {
        try {
            await registerUser(email,password)
            console.log('Usuario creado')
            navigate('/')
        } catch (error) {
            console.log(error.code)
            switch(error.code){
              case 'auth/email-already-in-use':
                setError('email',{
                  message: 'Usuario ya registrado.'
                })
                break;
              default: 
                console.log('Ocurrio un error en el server')
            }
        }
    }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required: {
              value: true,
              message: "Campo obligatorio...",
            },
            pattern: {
              value:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Formato de email incorrecto",
            },
          })}
        /> <br />
        {errors.email && errors.email.message} <br />
        <input
          type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            minLength: {
              value: 6,
              message: "Minimo 6 carácteres",
            },
            validate: {
              trim: (v)=>{
                if(!v.trim())return 'No dejes espacios en blanco😛'
                true
              } 
            }
          })}
        /> <br />
        {errors.password && errors.password.message} <br />
        <input
          type="password"
          placeholder="Ingrese Password"
          {...register("repassword", {
            validate: {
              equals: (v) =>
                v === getValues("password") || "No coinciden las contraseñas",
            },
          })}
        /> <br />
        {errors.repassword && errors.repassword.message} <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Register
