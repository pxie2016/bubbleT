import React from 'react'
import { useSelector } from 'react-redux'
import Redirect from './Redirect'

function PrivateRoute({children}) {
    const {user}=useSelector((state)=>({...state.user}))
    return user?children:<Redirect/>

}

export default PrivateRoute