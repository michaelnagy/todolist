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
  // Saves the input form data in real time 
  handleInputChange = (e) => {
    this.setState({value: e.target.value})
  }
  // Adds the submitted value to the task list 
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.value)
    // make the form empty again 
    document.getElementById("taskinput").value = ''
  }

  render () {
    return (
      <Segment inverted className='todo-input animated fadeInDown'>
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

