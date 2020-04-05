import React, { useState, useEffect, useContext } from 'react'
//imports
import { Header, Label, Icon } from "semantic-ui-react"
import { getData } from "../utils/FetchData"
import Layout from "../components/Layout/index"
import PlayList from "../components/PlayList/index"
import CreatePlaylist from "./CreatePlaylist";
import { fetchWithBody } from "../utils/FetchData";
import { Context } from "../utils/Context";


const PlayLists = () => {
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isPublic, setIsPublic] = useState(false)

  const { user } = useContext(Context)


  const deletePLayList = (playlist_id) => {
    getData(`playlists/${playlist_id}/followers`, 'DELETE')
      .then((res) => {
        setList(list.filter((item) => item.id !== playlist_id))
      })
      .catch(e => {
        console.log('error : ', e)
      })
  }

  const onSubmit = () => {
    console.log(name)
    console.log(description)
    console.log(isPublic)

    fetchWithBody(`users/${user.id}/playlists`, 'POST', {
      name, description, "public": isPublic
    })
      .then(response => response.json())
      .then(response => {
        setList([response, ...list])
      })
      .catch(e => {
        console.log(e)
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
      <Header className='medium-width' as='h2'>PlayLists <CreatePlaylist submit={onSubmit} handleDescription={setDescription} handleIsPublic={setIsPublic} handleName={setName} /></Header>
      {
        list.length !== 0 ?
          <PlayList list={list} remove={deletePLayList} /> : <Label size='large'>Aún no ha creado alguna playlist.</Label>}
    </Layout>
  )
}

export default PlayLists
