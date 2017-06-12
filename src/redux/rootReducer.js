import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

const initialState = [
    {
      id: 0, 
      text: 'Example Task (Delete it if you want)', 
      completed: false
    }
  ]

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [...state, { id: state[state.length-1].id + 1, text: action.text, completed: false} ]
        
    // case 'TASK_DELETED':{}
    //   return {...state, action.payload }

    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(logger))
export default store