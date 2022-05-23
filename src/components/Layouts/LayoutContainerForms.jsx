import { Outlet } from "react-router-dom"

const LayoutContainerForms = () => {
    return(
        <div className="w-96 mx-auto mt-10">
            <Outlet/>
        </div>
    )
}

export default LayoutContainerForms
