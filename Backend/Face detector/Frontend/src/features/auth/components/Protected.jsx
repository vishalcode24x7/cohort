import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, useNavigate } from 'react-router'
import {Link} from "react-router"

const Protected = ({children}) => {

    const { user, loading} = useAuth()
    const navigate = useNavigate()

    if(loading){
        return <h1>
            <Link to="/login">Click for Login</Link>
        </h1>
    }

    if(!user){
        return <Navigate to="/login" />
    }

    
    return children
}

export default Protected
