import React, { useEffect, useState, useContext } from 'react'
//imports
import Layout from "../components/Layout/index"
import { useNavigate } from "@reach/router"
import { getData } from "../utils/FetchData"
import { Context } from "../utils/Context"
import SearchResults from "../components/SearchResults/index"

const Search = ({ query }) => {
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  const { removeAuth } = useContext(Context)

  useEffect(() => {
    getData(`search?q=${query}&type=track`)
      .then(response => response.json())
      .then(results => {
        if (results.hasOwnProperty('error')) {
          console.log('entro')
          removeAuth()
          navigate('/')
        }
        setResults(results.tracks.items)
      })
      .catch(error => {
        removeAuth()
        navigate('/')
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])
  console.log(results)
  return (
    <Layout>
      <SearchResults results={results} query={query} />
    </Layout>
  )
}

export default Search
