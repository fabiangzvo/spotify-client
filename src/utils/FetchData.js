import { config } from "../config/index"


//simple fetch without body
export const getData = async (path = '', method = 'GET') => {
  const token = localStorage.getItem('token')
  return window.fetch(config.baseUrl + path, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

//fetch with body request
export const fetchWithBody = async (path = '', method = 'POST', body = {}) => {
  const token = localStorage.getItem('token')

  return window.fetch(config.baseUrl + path, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
}