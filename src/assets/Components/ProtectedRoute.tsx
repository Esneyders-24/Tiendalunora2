import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext"

const  ProtectedRoute = () => {
    const { isAuthConticated } =  useAuth()

    if(!isAuthConticated){
        return <Navigate to= "/login" replace/>
    }
    return <Outlet/>
}

export default ProtectedRoute