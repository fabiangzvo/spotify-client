import React, { useContext } from 'react'
import { Router as Routes } from '@reach/router'
//imports
import { Context } from "./Context"
import Home from "../components/Home/index"
import UserProfile from "../containers/UserProfile"

const Router = () => {

  const { isAuth } = useContext(Context)

  const routes = React.forwardRef((props, ref) => {
    return <div className='full-height' ref={ref}>{props.children}</div>
  })

  return (
    <Routes component={routes}>
      {!isAuth ? <Home path='/' /> : <UserProfile path='/' />}
    </Routes>
  )
}

export default Router
