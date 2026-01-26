import React from 'react';
import TodoItem from './ToDoItem';

function TodoList(props) {
  const { todos, onDelete } = props;

  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc' }}>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
        />
      ))}
      
      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888' }}>
          Chưa có công việc nào.
        </p>
      )}
    </div>
  );
}

export default TodoList;