import React from 'react'

//imports 
import SpotyClient from "../SpotyClient/index"
import { Nav } from "./style";
const NavBar = ({ children }) => {
  return (
    <Nav>
      <SpotyClient />
      <div>
        {
          children
        }
      </div>
    </Nav>
  )
}

export default NavBar