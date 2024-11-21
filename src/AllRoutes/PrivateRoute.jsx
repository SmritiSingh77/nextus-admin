import React, { useState } from 'react'
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {

  const isAuth = false;

  const location = useLocation()

  if(!isAuth){
    return  <Navigate to='/login' state={location.pathname} replace={true}/>
  }

  return  children
  
}
