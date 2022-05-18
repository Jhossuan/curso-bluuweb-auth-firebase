import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Register = () => {
    const [email, setEmail] = useState('jhossua@test.com')
    const [password, setPassword] = useState('jhossua')

    const {registerUser} = useContext(UserContext)

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('procesando form : ',email,password)
        try {
            await registerUser(email, password)
            console.log('Usuario creado')
            navigate('/')
        } catch (error) {
            console.log(error.code)
            alert('Este email ya esta registrado...')
        }
    }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Ingrese Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder="Ingrese Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Register
