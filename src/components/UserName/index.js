import React, { useContext } from 'react'
//imports
import { Icon, Flag, Label } from "semantic-ui-react";
import { Context } from "../../utils/Context";
import { Header } from "./style";

const UserName = () => {
  const { user } = useContext(Context)
  return (
    <Header as='h2'><Icon name='at' />{user.display_name} <Flag name={user.country.toLowerCase()} /></Header>
  )
}

export default UserName
