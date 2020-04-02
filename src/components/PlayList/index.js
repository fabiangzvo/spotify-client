import React from 'react'
//imports
import Item from "../Item/index";
import { List } from './style'

const PlayList = ({ list = [], remove }) => {

  return (
    <List size='large'>
      {
        list.map(item => <Item key={item.id} type="playlist" item={item} onClick={remove} />)
      }
    </List>
  )
}

export default PlayList
