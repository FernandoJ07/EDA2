import { useReducer, useEffect } from 'react';
import { TodoReducer } from "../components/TodoReducer";
import * as types from '../components/types';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, [], init);

  console.log(todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatchTodo({ type: types.CREATE_TODO, payload: newTodo });
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({ type: types.DELETE_TODO, payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({ type: types.TOGGLE_TODO, payload: id });
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter(todo => !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos
  };
};