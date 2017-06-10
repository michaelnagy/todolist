import React, { Component } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react'
import './TodoInput.scss'

const TodoInput = () => (
  <Segment inverted className='todo-input'>
    <Form.Group inline>
      <Form.Field>
        <Input fluid={true} size='massive' type='text' placeholder='Insert your task and hit Enter'/>
      </Form.Field>
    </Form.Group>
    
  </Segment>
)

export default TodoInput
