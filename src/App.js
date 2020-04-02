import React, { Fragment } from 'react'
//imports
import NavBar from "./components/NavBar/index"
import { GlobalStyles } from "./styles/globalStyles"
import Router from "./utils/Router"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <NavBar />
      <Router />
    </Fragment>
  );
}

export default App;
