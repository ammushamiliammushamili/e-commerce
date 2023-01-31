import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

function UserRoute({ children }) {
    const { usertype } = useContext(UserContext)

    return (
        <>
            {
                usertype == 'user' ? children : <Navigate to="/user/login" />
            }

        </>
    )
}

export default UserRoute