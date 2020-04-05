import React, { useContext } from 'react'
import { Router as Routes, Redirect } from '@reach/router'
//imports
import { Context } from "./Context"
import Home from "../components/Home/index"
import UserProfile from "../containers/UserProfile"
import Search from "../containers/Search"

const Router = () => {

  const { isAuth } = useContext(Context)

  const routes = React.forwardRef((props, ref) => {
    return <div className='full-height' ref={ref}>{props.children}</div>
  })

  return (
    <Routes component={routes}>
      {!isAuth ? <Home path='/' /> : <UserProfile path='/' />}
      {!isAuth && <Redirect from='/search/' to='/' />}
      <Search path='/search/:query' />
    </Routes>
  )
}

export default Router
