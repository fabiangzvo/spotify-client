import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const Nav = styled(Menu)`
  display:flex;
  justify-content:space-between !important;
  width:100% !important;
  height:auto;

  &:last-child{
    margin-left:0 !important;
  }
`

export const SubMenu = styled(Menu.Menu)`
  margin:0 !important;
`