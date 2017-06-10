import React, { Component } from 'react';
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
    console.log('Enviou');
    

    e.preventDefault();
  }  


  render () {
    return (
      <Segment inverted className='todo-input'>
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Input fluid={true} size='massive' onChange={ this.handleInputChange } placeholder='Insert your task and hit Enter'/>
            </Form.Field>
        </Form>
        
        
      </Segment>
    )
  }
}

export default TodoInput
