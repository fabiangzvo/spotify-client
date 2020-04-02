import React, { useContext, useState } from 'react'
//imports
import { Context } from "../utils/Context"
import Layout from "../components/Layout/index";
import Item from "../components/Item/index";
import { Responsive } from "semantic-ui-react";

const MenuProfile = () => {
  const { user } = useContext(Context)
  const [menu, setMenu] = useState([{ item: 'users', value: user.followers.total }, { item: 'mail', value: user.email }, { item: 'spotify', value: 'ver en spotify', link: user.external_urls.spotify }])

  return (
    <Layout margin={2}>
      {
        menu.map((item, i) => <Item key={i} type='profile' icon={item.item} label={item.value} direction='column' />)
      }
    </Layout>
  )
}

export default MenuProfile
