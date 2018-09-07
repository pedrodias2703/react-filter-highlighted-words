import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default () => (
  <Header as='h2' icon textAlign='center'>
    <Icon name='code' circular />
    <Header.Content>WAES Assessment</Header.Content>
    <Header.Subheader>Pedro Dias - pedroboi@gmail.com</Header.Subheader>
  </Header>
)