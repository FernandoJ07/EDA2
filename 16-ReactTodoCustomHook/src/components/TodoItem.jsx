import React from 'react';
import '../index.css';

export const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="todo-item">
      <span 
        className={todo.done ? 'done' : ''} 
        onClick={() => onToggle(todo.id)}
      >
        {todo.description}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};