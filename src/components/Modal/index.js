import React from 'react'
import { Button, Header, Icon, Modal as Popup } from 'semantic-ui-react'

const Modal = () => {
  return (
    <Popup trigger={<Button>Basic Modal</Button>} basic size='small'>
      <Header icon='archive' content='Archive Old Messages' />
      <Popup.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
      </p>
      </Popup.Content>
      <Popup.Actions>
        <Button basic color='red' inverted>
          <Icon name='remove' /> No
      </Button>
        <Button color='green' inverted>
          <Icon name='checkmark' /> Yes
      </Button>
      </Popup.Actions>
    </Popup>
  )
}

export default Modal
