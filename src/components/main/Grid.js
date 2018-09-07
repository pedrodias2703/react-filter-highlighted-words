import React from 'react'
import { Table, Label } from 'semantic-ui-react'

import { ButtonGroup } from '../colors'
import { TextFilter, TextMarker } from "../words"
import { ROLES } from "../../constants"

export default () => (
  <Table >
  <Table.Header>
    <Table.Row textAlign="center">
      <Table.HeaderCell />
      <Table.HeaderCell>COLORS</Table.HeaderCell>
      <Table.HeaderCell>WORDS</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row verticalAlign='top'>
      <Table.Cell><Label ribbon size={'big'}>Mark!</Label></Table.Cell>
      <Table.Cell><ButtonGroup role={ROLES.MARKING} /></Table.Cell>
      <Table.Cell><TextMarker /></Table.Cell>
    </Table.Row>
    <Table.Row verticalAlign='top'>
      <Table.Cell><Label ribbon size={'big'}>Filter!</Label></Table.Cell>
      <Table.Cell><ButtonGroup role={ROLES.FILTERING} /></Table.Cell>
      <Table.Cell><TextFilter /></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
)