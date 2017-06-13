import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, reverseAction, completeTodo } from '../../redux/actions'
import { Card, Button, Grid, Icon } from 'semantic-ui-react'
import './TaskContainer.scss'

class TaskContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      show_done: false
    }
  }

  reverseOrder = () => {
    this.setState({ active: !this.state.active })
    this.props.reverseAction()
  }

  filterDone = () => {
    this.setState({ show_done: !this.state.show_done })
  }
  

  render () {
    // destructuring props and state
    let { active, show_done, loading } = this.state
    let { todo } = this.props 
    return (
      <Grid.Row className='task-container animated fadeInUp'>
        <Grid columns={1}>
          <Grid.Column>
            <Button toggle active={active} onClick={this.reverseOrder}>
              <Icon size='large' name='exchange' /> { active ? 'Newer first' : 'Older first' }
            </Button>
          </Grid.Column>
        </Grid>
        <Card.Group>
          { todo.map((item, i) => {
            return <Card fluid key={i} 
                      className={'todo-item animated fadeIn' 
                                + (item.completed ? ' completed fadeOut' : '') 
                                + (!item.completed && show_done ? ' filtered' : '')
                    }>
                      <Card.Content>
                        <Card.Header>
                          <span>{item.text}</span>
                          <span style={{float:'right'}}>
                            <Icon link={true} onClick={() => this.props.completeTodo(item.id)} color={'green'} name='check' />
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
              <Button onClick={this.filterDone} >{ show_done ? 'Show all' : 'Show done' }</Button>
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
const mapDispatchToProps = dispatch => 
  ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    reverseAction: () => dispatch(reverseAction()),
    completeTodo: id => dispatch(completeTodo(id))
  }) 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer)