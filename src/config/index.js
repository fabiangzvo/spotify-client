require('dotenv').config({ path: '../../.env' })

const config = {
  clientID: process.env.REACT_APP_CLIENT_ID,
  linkRedirect: process.env.REACT_APP_LINK_REDIRECT
}
module.exports = { config }