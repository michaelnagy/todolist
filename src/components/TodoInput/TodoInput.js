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
    // this.props.dispatch({
    //   type : 'ADD_TODO', payload: this.state.value
    // })
    console.log(this.state.value);
    
    this.props.addTodo(this.state.value)
  }

  render () {
    return (
      <Segment inverted className='todo-input'>
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Input fluid={true} size='massive' onChange={ this.handleInputChange } placeholder='Insert your task and hit Enter'/>
              <input type="submit" style={{display: "none"}} />
            </Form.Field>
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

