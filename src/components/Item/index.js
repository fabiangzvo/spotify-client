import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "@reach/router";


const Item = ({ path, label, onClick }) => {
  return (
    <Menu.Item onClick={onClick}>
      <Link to={path} >{label}</Link>
    </Menu.Item>
  )
}

export default Item
