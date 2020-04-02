import React, { useEffect, useContext } from 'react'
//imports
import { Image, Header, Container } from 'semantic-ui-react'
import { getData } from "../utils/FetchData"
import { Context } from "../utils/Context"
import { Redirect } from "@reach/router"
import Layout from "../components/Layout/index"
import UserName from "../components/UserName/index"
import MenuProfile from "./MenuProfile";
import PlayLists from "./PlayLists"

/**
 * UserProfile container
 * 
 * make a request to the api to get all posible data of the user to render 
 */
const UserProfile = () => {
  //get varaibles from context
  const { removeAuth, isAuth, activateUser, user } = useContext(Context)

  useEffect(() => {
    (Object.keys(user).length === 0 && isAuth) &&
      getData('me')
        .then(resonse => resonse.json())
        .then((user) => {
          if (user.hasOwnProperty('error')) {
            removeAuth()
            return <Redirect to='/' />
          }
          activateUser(user)
        })
        .catch((error) => {
          removeAuth()
          return <Redirect to='/' />
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //validation if user have data to render
  if (Object.keys(user).length === 0) return null

  return (
    <Layout direction='column' heigth={100} justify='flex-start' >
      <Layout width={100} margin={2} >
        <Header as='h1'>Información personal.</Header>
      </Layout>
      <Layout>
        <Image src={user.images[0].url} circular size='large' />
        <Container>
          <UserName />
          <MenuProfile />
          <PlayLists />
        </Container>
      </Layout>
    </Layout>
  )
}

export default UserProfile
