import React, { Fragment } from 'react'
//imports
import NavBar from "./components/NavBar/index"
import { GlobalStyles } from "./styles/globalStyles"
import Router from "./utils/Router"
import { createHistory, LocationProvider } from "@reach/router"
import Footer from "./components/Footer/index";

function App() {
  const history = createHistory(window)
  return (
    <LocationProvider history={history}>
      <GlobalStyles />
      <NavBar />
      <Router />
      <Footer />
    </LocationProvider>
  );
}

export default App;
