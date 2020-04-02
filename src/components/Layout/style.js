import styled from "styled-components"
import { Grid as Layout } from "semantic-ui-react"

export const Grid = styled(Layout)`
  height:${props => props.heigth ? `${props.heigth}%` : "auto"};
  display: flex;
  flex-direction: ${ props => props.direction} !important;
  align-items: ${ props => props.align} !important;
  width: ${ props => props.width ? `${props.width}%` : "auto"} !important;
  justify-content: ${ props => props.justify || "space-around"};
  margin-bottom:1em !important;
  margin:${props => `${props.margin}em ${props.margin}em`} !important;
`