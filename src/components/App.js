import React, { Component } from 'react';
import { Container, Header, Grid, Image } from 'semantic-ui-react'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Container textAlign={'center'}>
        
        <Grid columns={1} centered>
          <Grid.Row>
          <Header>The Redux TodoList</Header>
            <Grid.Column>
              <p>Teste</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
