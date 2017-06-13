import { compose, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { storedState, saveState } from './persistance'

let initialState = storedState()

if (!initialState) {
  initialState =  [
    {
      id: 0, 
      text: 'Example Task (Delete it if you want)', 
      completed: false
    }
  ]
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: state[state.length-1].id+1, text: action.text, completed: false} ]
        
    case 'DELETE_TODO':
    let newState = state.filter(
        elem => {  return elem.id !== action.id }
      )
      return newState

    case 'REVERSE_TODO':
      return Array.prototype.slice.call(state).reverse()

    case 'COMPLETE_TODO':
      return state.map(todo => todo.id === action.id
      ? { ...todo, completed: !todo.completed }
      : todo)

    default:
      return state;
  }
}

const store = createStore(rootReducer, initialState, applyMiddleware(logger))

// listening to changes to the store and saving it in LocalStorage
store.subscribe(() => {
  saveState(store.getState())
})

export default store