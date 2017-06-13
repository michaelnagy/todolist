import React, { Component } from 'react'; 
import { Container, Header, Grid, Image } from 'semantic-ui-react'
import TodoInput from './TodoInput/TodoInput'
import TaskContainer from './TaskContainer/TaskContainer'
import './App.scss';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Container textAlign={'center'}>
        <Grid columns={1} centered>
          <Grid.Row>
          <Header style={{padding:'2rem'}} as='h1'>The Redux TodoList</Header>
            <Grid.Column>
              <TodoInput />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <TaskContainer/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
