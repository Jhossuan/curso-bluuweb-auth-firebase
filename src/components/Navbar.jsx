import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
const Navbar = () => {

    const {user, signOutUser} = useContext(UserContext)
    const handleClickLogout = async() => {
      try {
        await signOutUser()
      } catch (error) {
        console.log(error.code)
      }
    }

    return (
      <div className="Navbar">
          {user ? (
              <>
                <Link to="/">Home</Link>
                <button onClick={handleClickLogout}>Logout</button>
              </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )
        }
      </div>
    );
}

export default Navbar;