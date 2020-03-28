import React, { useContext } from 'react'
import { Router as Routes } from '@reach/router'
//imports
import { Context } from "./Context";
import Home from "../components/Home/index";
import User from "../components/User/index";
const Router = () => {

  const { isAuth } = useContext(Context)

  return (
    <Routes>
      {!isAuth ? <Home path='/' /> : <User path='/' />}
    </Routes>
  )
}

export default Router
