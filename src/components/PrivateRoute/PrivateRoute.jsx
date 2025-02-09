import { useSelector } from "react-redux"
import { selectAuth } from "../../redux/auth/selectors"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRoute = () => {
    const {isLoggedIn, token} = useSelector(selectAuth)

    if (!isLoggedIn && token) {
        return <p>.loading</p>
    }

    if (!isLoggedIn && !token) {
        return <Navigate to='/login'/>
    }


  return <Outlet/>
}

export default PrivateRoute