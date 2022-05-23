import Navbar from './components/Navbar'
import LayoutContainerForms from './components/Layouts/LayoutContainerForms'
import LayoutRequireAuth from './components/Layouts/LayoutRequireAuth'

import { useContext } from 'react'
import { UserContext } from './context/UserProvider'

import {Routes, Route} from 'react-router-dom'
import Register from './routes/Register'
import Login from './routes/Login'
import Home from './routes/Home'
import Perfil from './routes/Perfil'
import NotFound from './routes/NotFound'

function App() {

  const {user} = useContext(UserContext)
  if(user === false){
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' element={<LayoutRequireAuth />}>
          <Route index element={<Home />}/>
          <Route path='perfil' element={<Perfil />}/>
        </Route>

        <Route path='/' element={<LayoutContainerForms />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App
