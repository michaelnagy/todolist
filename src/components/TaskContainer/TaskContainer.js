import React, { Component } from 'react'
import { Card, Button, Grid, Icon } from 'semantic-ui-react'
import './TaskContainer.scss'

const TaskContainer = () => (
  <Grid.Row className='task-container'>
    <Grid columns={1}>
      <Grid.Column>
        <Button.Group>
          <Button labelPosition='left' icon='left chevron' content='Oldest first' />
          <Button labelPosition='right' icon='right chevron' content='Newest first' />
        </Button.Group>
      </Grid.Column>
    </Grid>
    <Card.Group>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <span>Title</span>
            <span style={{float:'right'}}>
              <Icon color={'green'} name='check' />
              <Icon color={'violet'} name='delete' /> 
            </span>
          </Card.Header>
        </Card.Content>
      </Card>
    </Card.Group>
    <Grid columns={1}>
      <Grid.Column>
        <Button.Group>
          <Button>Show done</Button>
          <Button>Show all</Button>
        </Button.Group>
      </Grid.Column>
    </Grid>
  </Grid.Row>
)

export default TaskContainer
