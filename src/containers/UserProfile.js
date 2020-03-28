import React, { useEffect, useState, useContext } from 'react'

import { getData } from "../utils/FetchData"
import { Context } from "../utils/Context"
import { Redirect } from "@reach/router";

/**
 * UserProfile container
 * 
 * get all posible data of the user to render 
 */
const UserProfile = () => {
  const [user, setUser] = useState({})

  const { removeAuth } = useContext(Context)

  useEffect(() => {
    getData('me')
      .then((user) => {
        if (!user) {
          //removeAuth()
          //return <Redirect to='/' />
        }
        setUser(user)
      })
      .catch((error) => {
        removeAuth()
        return <Redirect to='/' />
      })
  }, [removeAuth])


  return (
    <div>

    </div>
  )
}

export default UserProfile
