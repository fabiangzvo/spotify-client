import React from 'react'
import { config } from "../config/index";


//simple fetch without body
export const getData = async (path = '', method = 'GET') => {
  const token = localStorage.getItem('token')
  return window.fetch(config.baseUrl + path, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .catch(e => {
      console.log('error : ', e)
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

/**
     * convert miliseconds to min and sec
     * @param {float} ms 
     * @return string
     */
export const toSeconds = (ms) => {
  ms = (ms - (ms % 1000)) / 1000;
  const sec = ms % 60;
  ms = (ms - sec) / 60;
  const min = ms % 60;

  return `${min} min ${sec} seg`

}

/**
 * concatenate all artist of a song
 * @param {Array} artists artists to concat
 */
export const concatArtists = (artists = []) => {
  var label = ''
  //map all artists
  artists.map((artist) => {
    //
    label += artist.name + ', '
  })

  return label.slice(0, -2)
}
