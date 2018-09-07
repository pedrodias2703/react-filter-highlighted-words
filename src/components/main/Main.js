import React from 'react'
import { Container } from 'semantic-ui-react'

import Header from './Header'
import Grid from './Grid'

import 'semantic-ui-css/semantic.min.css'

const Main = () => (
  <Container>
    <Header />
    <Grid />
  </Container>
)
  
export default Main