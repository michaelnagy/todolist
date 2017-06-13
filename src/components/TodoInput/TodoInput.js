import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions'
import { Form, Input, Segment } from 'semantic-ui-react'
import './TodoInput.scss'

class TodoInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.value)
    document.getElementById("taskinput").value = ''
  }

  render () {
    return (
      <Segment inverted className='todo-input'>
        <Form onSubmit={this.handleSubmit}>
          <Input id='taskinput' fluid={true} size='massive' onChange={ this.handleInputChange } placeholder='Insert your task and hit Enter' required/>
        </Form>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
    return {
    todo : state
  }
}

export default connect(
  mapStateToProps,
  {addTodo:addTodo}
)(TodoInput)

