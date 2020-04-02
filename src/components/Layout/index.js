import React from 'react'
import { Grid } from "./style"

const Layout = ({ children, width, justify, direction = 'row', heigth, align = 'center', margin = 0 }) => {
  return (
    <Grid stackable direction={direction} width={width} justify={justify} height={heigth} align={align} margin={margin}>
      {children}
    </Grid>
  )
}

export default Layout