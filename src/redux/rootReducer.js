import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

const initialState = [
    {
      id: 0, 
      text: 'Example Task (Delete it if you want)', 
      completed: false
    }
  ]
let nextId = 1

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [...state, { id: nextId++, text: action.text, completed: false} ]
        
    case 'DELETE_TODO':
      let newState = state.filter(
        elem => {  return elem.id !== action.id }
      )
      console.log('reduced array: ', newState);
      return newState

    case 'REVERSE_TODO':
      return Array.prototype.slice.call(state).reverse()

    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(logger))
export default store