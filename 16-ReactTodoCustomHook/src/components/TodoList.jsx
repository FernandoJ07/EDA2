import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDeleteTodo} 
          onToggle={onToggleTodo} 
        />
      ))}
    </div>
  );
};