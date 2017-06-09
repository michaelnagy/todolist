import React, { Component } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react'

const TodoInput = () => (
  <Segment inverted>
    <Form.Group inline>
      <Form.Field>
        <Input type='text' placeholder='Insert your task and hit Add'/>
      </Form.Field>
      <Form.Button content='Add' />
    </Form.Group>
  </Segment>
)

export default TodoInput
