import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Login from './routes/Login'
import RequireAuth from './components/RequireAuth'
import Register from './routes/Register'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import LayoutForms from './components/LayoutForms'

function App() {

  const {user} = useContext(UserContext)
  if(user === false){
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route path='/' element={<LayoutForms />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      
      </Routes>
    </div>
  );
}

export default App
