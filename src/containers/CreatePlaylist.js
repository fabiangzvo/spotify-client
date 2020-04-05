import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

const CreatePlaylist = ({ submit, handleName, handleIsPublic, handleDescription }) => {

  return (
    <Modal trigger={<Icon name='add circle' />} closeIcon>
      <Header icon='music' content='Crear nueva Playlist' />
      <Modal.Content>
        <Form onSubmit={submit}>
          <Form.Input label='Nombre de playlist :' onChange={(e) => { handleName(e.target.value) }} placeholder='Nueva playlist' />
          <Form.Radio toggle label='Hacer playlist publica' onChange={(e) => { console.log(e); handleIsPublic(e.target.value) }} />
          <Form.TextArea label='Descripción :' placeholder='Describe la nueva playlist' onChange={(e) => { handleDescription(e.target.value) }} />
          <Button type='submit'>Crear</Button>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red'>
          <Icon name='remove' /> No
      </Button>
        <Button color='green'>
          <Icon name='checkmark' /> Yes
      </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CreatePlaylist
