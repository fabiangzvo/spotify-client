import React from 'react'

//imports 
import { Icon } from 'semantic-ui-react'
import SpotyClient from "../SpotyClient/index"
import { Nav } from "./style";

const NavBar = ({ children }) => {
  return (
    <Nav>
      <SpotyClient />
      <div>
        <Icon name='home' size='large' />
      </div>
    </Nav>
  )
}

export default NavBar