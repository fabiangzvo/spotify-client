import React from 'react'
//imports
import { MenuItem, PlayItem } from "./style"
import { Link } from "@reach/router"
import { Icon, Label, List, Image } from "semantic-ui-react";

const Item = ({ type = "navbar", direction = 'row', path, label, onClick, icon, item }) => {
  //Navbar profile item
  const ProfileItem = () => <MenuItem direction={direction}><Icon color='black' name={icon} size='large' /><Label size='big'>{label}</Label></MenuItem>
  //Navbar item
  const NavItem = () => <MenuItem direction={direction}><Link onClick={onClick} to={path} >{label}</Link></MenuItem>
  //playlist item
  const PlayListItem = () => (
    <PlayItem>
      <Image avatar src={item.images[0] ? item.images[0].url : require('../../assets/not-available.png')} />
      <List.Content>
        <List.Header as='a'>{item.name}</List.Header>
        <List.Description>{item.description || 'no hay descripción'} - total {item.tracks.total} tracks.</List.Description>
      </List.Content>
      <label onClick={() => { onClick(item.id) }}><Icon name='trash' /></label>
    </PlayItem>)

  switch (type) {
    case "navbar":
      return <NavItem />
    case "playlist":
      return <PlayListItem />
    default:
      return <ProfileItem />
  }
}

export default Item
