// All the actions
export const addTodo = text => ({ type: 'ADD_TODO', text })
export const deleteTodo = id => ({ type: 'DELETE_TODO', id })
export const completeTodo = id => ({ type: 'COMPLETE_TODO', id })
export const reverseAction = () => ({ type: 'REVERSE_TODO' })