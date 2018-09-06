import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'

import { ButtonGroup } from '../colors';
import { TextFilter, TextMarker } from "../words";
import { ROLES } from "../../constants";

const COLUMNS_SIZE = 3;

export default () => (
    <Grid divided='vertically'>
      <Grid.Row columns={COLUMNS_SIZE} verticalAlign='middle'>
        <Grid.Column width={2}>
          <Segment circular inverted>Mark!</Segment>
        </Grid.Column>
        <Grid.Column>
          <ButtonGroup role={ROLES.MARKING} />
        </Grid.Column>
        <Grid.Column width={8}>
          <TextMarker />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={COLUMNS_SIZE} verticalAlign='middle'>
        <Grid.Column width={2}>
          <Segment circular inverted>Filter!</Segment>
        </Grid.Column>
        <Grid.Column>
          <ButtonGroup role={ROLES.FILTERING} />
        </Grid.Column>
        <Grid.Column stretched={true}>
          <TextFilter />
        </Grid.Column>
      </Grid.Row>
    </Grid>
);