import React, { useState, useEffect } from 'react'
//imports
import { Header } from "semantic-ui-react"
import { getData, fetchWithBody } from "../utils/FetchData"
import Layout from "../components/Layout/index"
import PlayList from "../components/PlayList/index";

const PlayLists = () => {
  const [list, setList] = useState([])

  const deletePLayList = (playlist_id) => {
    getData(`playlists/${playlist_id}/followers`, 'DELETE')
      .then((res) => {
        console.log(res)
      })
      .catch(e => {
        console.log('error : ', e)
      })
  }

  useEffect(() => {
    getData('me/playlists')
      .then(resonse => resonse.json())
      .then(response => {
        setList(response.items)
      })
      .catch(e => {
        console.log('error on get data : ', e)
      })
  }, [])

  return (
    <Layout direction="column" width={80}>
      <Header as='h3'>PlayList</Header>
      {
        list.length !== 0 ?
          <PlayList list={list} remove={deletePLayList} /> : "Aún no ha creado alguna playlist."}
    </Layout>
  )
}

export default PlayLists
