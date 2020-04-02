import styled from "styled-components"
import { Menu, List } from 'semantic-ui-react'

export const MenuItem = styled(Menu.Item)`
  display:flex;
  flex-direction:${props => props.direction};
  justify-content:center;
  align-items:center;
  text-align:center;
`

export const PlayItem = styled(List.Item)`
  display:flex !important;
  width:80%;
  align-items:center;
  justify-content:space-between !important;
  &:after{
    content:none !important;
  }
`