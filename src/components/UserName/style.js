import styled from "styled-components"
import { Header as Head } from "semantic-ui-react"

export const Header = styled(Head)`
  display:flex;
  flex-wrap:nowrap;
  align-items:center;
  justify-content:center;
  width: 57%;

  & .flag:before {
    margin-left:1em;
  }
`