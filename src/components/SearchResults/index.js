import React from 'react'
//imports
import Layout from "../Layout/index";
import { Label } from "semantic-ui-react";
import ResultCard from "../ResultCard/index";

const SearchResults = ({ results = [], query }) => {
  return (
    <Layout heigth={100} direction='column' align='flex-start'>
      <Label size='massive'>Resultados para la busqueda : {query} </Label>
      <Layout heigth={100}>
        {
          results.map(result => <ResultCard key={result.id} duration={result.duration_ms} rating={result.popularity} item={result} image={result.album.images[0].url} title={result.name} author={result.artists} />)
        }
      </Layout>
    </Layout>
  )
}

export default SearchResults
