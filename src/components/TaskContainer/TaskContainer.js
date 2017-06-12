import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../redux/actions'
import { Card, Button, Grid, Icon } from 'semantic-ui-react'
import './TaskContainer.scss'

class TaskContainer extends Component {
  constructor (props) {
    super(props)
    
  }

  render () {
    return (
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
          {this.props.todo.map((item, i) => {
            return <Card fluid key={i}>
                      <Card.Content>
                        <Card.Header>
                          <span>{item.text}</span>
                          <span style={{float:'right'}}>
                            <Icon link={true} color={'green'} name='check' />
                            <Icon link={true} onClick={() => this.props.deleteTodo(item.id)} color={'violet'} name='delete' /> 
                          </span>
                        </Card.Header>
                      </Card.Content>
                    </Card>
          })}
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
  }
}

const mapStateToProps = state => {
    return {
    todo : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return({
    deleteTodo: id => dispatch(deleteTodo(id))
  }) 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer)
