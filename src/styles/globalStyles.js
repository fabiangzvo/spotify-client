import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,#root {
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      width: 100%;
      height:100%;
    }
      
    *, *::before, *::after {
      box-sizing: inherit;
    }

    .button_home {
      background-color:#1db954;
      padding:1em 2em;
      color:#ffff;
      font-size:15px;
      border:none;
      border-radius:3em;
      font-weight:bold;
    }

    .button_login:hover{
      background-color: #1ED760;
    }

    .row{
      display:flex;
      justify-content:space-evenly;
      width:50%;
    }

    .ui.menu:after{
      display:none;
    }

    .full-height{
      height:100%;
    }

    .ui.label{
      background:inherit !important;
    }
    
    .medium-width{
      width:50%;
      display:flex;
      justify-content:space-around;
    }

    .medium-width > .icon{
      font-size:1em !important;
    }

` 