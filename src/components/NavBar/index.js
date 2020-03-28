import React, { useContext } from 'react'

//imports 
import { Menu, Input } from 'semantic-ui-react'
import SpotyClient from "../SpotyClient/index"
import { Nav } from "./style";
import Item from "../Item/index";
import { Context } from "../../utils/Context"

const NavBar = () => {
  const { removeAuth, isAuth } = useContext(Context)

  const logout = () => {
    removeAuth()
  }

  return (
    <Nav secondary stackable>
      <SpotyClient />

      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>

      {
        isAuth ?
          <Menu.Menu secondary stackable>
            <Item path='/profile' label='cuenta' />
            <Item path='/' label='Salir' onClick={() => logout()} />
          </Menu.Menu> : ''}
    </Nav>
  )
}

export default NavBar