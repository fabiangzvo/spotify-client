import React from 'react'
//imports
import { Card, Image, Rating } from "semantic-ui-react"
import { concatArtists, toSeconds, calculateRating } from "../../utils/index";

const ResultCard = ({ type, title, rating, duration, image, author = [] }) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{concatArtists(author)}</span>
        </Card.Meta>
        <Card.Description>
          duración : {toSeconds(duration)}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating icon='star' defaultRating={calculateRating(rating)} maxRating={5} disabled />
      </Card.Content>
    </Card>
  )
}

export default ResultCard
