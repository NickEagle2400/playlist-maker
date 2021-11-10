import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

function PrivateRoute({ children }) {
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser)
    return currentUser ? children : <Navigate to="/login" />
    }

export default PrivateRoute
