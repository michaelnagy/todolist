import { compose, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist'

const initialState = [
    {
      id: 0, 
      text: 'Example Task (Delete it if you want)', 
      completed: false
    }
  ]
let nextId = 1

const rootReducer = (state, action) => {
  let newState = [] 
  switch (action.type) {
    case 'ADD_TODO': 
      return [...state, { id: nextId++, text: action.text, completed: false} ]
        
    case 'DELETE_TODO':
      newState = state.filter(
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

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(logger),
    autoRehydrate()
  )
)

persistStore(store)
// const store = createStore(rootReducer, initialState, applyMiddleware(logger))
export default store