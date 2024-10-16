import React from 'react';
import { TodoAdd, TodoList } from './components';
import { useTodo } from './hooks/useTodo';
import './App.css';

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos
  } = useTodo();


  return (
    <div>
      <h1>TodoApp</h1>
      <h2>Total Todos: {countTodos()}</h2>
      <h2>Pending Todos: {countPendingTodos()}</h2>
      <TodoAdd onNewTodo={handleNewTodo} />
      <TodoList 
        todos={todos} 
        onDeleteTodo={handleDeleteTodo} 
        onToggleTodo={handleToggleTodo} 
      />
    </div>
  );
};