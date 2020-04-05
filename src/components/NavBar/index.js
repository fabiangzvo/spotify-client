import React, { useContext, Fragment } from 'react'

//imports 
import { Menu, Input, Icon } from 'semantic-ui-react'
import { useNavigate } from "@reach/router"
import SpotyClient from "../SpotyClient/index"
import { Nav } from "./style";
import Item from "../Item/index";
import { Context } from "../../utils/Context"

const NavBar = () => {
  const { removeAuth, isAuth } = useContext(Context)
  const navigate = useNavigate()
  const logout = () => {
    removeAuth()
  }
  const handleClick = () => {
    const toSearch = document.getElementsByClassName('search-input')[0].value
    navigate(`/search/${toSearch}`, { replace: true })
  }

  return (
    <Nav secondary stackable >
      <SpotyClient />
      {
        isAuth ?
          <Fragment>
            <Menu.Item>
              <Input input={<input type='text' className='search-input' />} icon={<Icon name='search' link onClick={(e) => { handleClick() }} />} placeholder='Buscar canción' />
            </Menu.Item>
            <Menu secondary stackable>
              <Item path='/profile' label='cuenta' />
              <Item path='/' label='Salir' onClick={() => logout()} />
            </Menu>
          </Fragment> : ''}
    </Nav>
  )
}

export default NavBar