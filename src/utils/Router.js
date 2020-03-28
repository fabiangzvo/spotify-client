import React, { useContext } from 'react'
import { Router as Routes } from '@reach/router'
//imports
import { Context } from "./Context";
import Home from "../components/Home/index";
import UserProfile from "../containers/UserProfile";
const Router = () => {

  const { isAuth } = useContext(Context)

  return (
    <Routes>
      {!isAuth ? <Home path='/' /> : <UserProfile path='/' />}
    </Routes>
  )
}

export default Router
