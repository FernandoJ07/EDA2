import { useReducer } from 'react'
import { TodoReducer } from './components/TodoReducer'
import { TodoAdd, TodoList } from './components'
import './App.css'

const initialState = [{
  id: new Date().getTime(),
  description: "Hacer los challenges",
  done: false
}]

export const TodoApp = ()=> {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState)

  const handleNewTodo = (newTodo) => {
    dispatchTodo({
      type: '[TODO] ADD',
      payload: newTodo
    })
  }

  const handleDeleteTodo = (todoId) => {
    dispatchTodo({
      type: '[TODO] DELETE',
      payload: todoId
    })
  }
  
  return (
    <>
      <h1>Todo App</h1>
      <TodoAdd onNewTodo={handleNewTodo}/>
      <hr />
      <TodoList todos={todos} onDeleteTodo= {handleDeleteTodo}/>

      
    </>
  )
}

