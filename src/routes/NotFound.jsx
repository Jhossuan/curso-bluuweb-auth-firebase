import { Link } from "react-router-dom"
import Title from "../components/Title"

const NotFound = () => {
const buttonRed = 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'

return (
    <div className="container mx-auto">
      <Title text='404 | Pagina no encontrada' />
      <p className="text-center">Lo sentimos, la ruta que intentas buscar no existe. 😭</p>
      <Link to='/' className={buttonRed}>Ir al home</Link>
    </div>
  )
}

export default NotFound
