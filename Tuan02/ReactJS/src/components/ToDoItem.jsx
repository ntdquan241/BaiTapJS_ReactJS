import React from 'react';

function TodoItem(props) {
  const { todo, onDelete } = props;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '10px', 
      borderBottom: '1px solid #ddd' 
    }}>
      <span>{todo.text}</span>
      
      <button 
        onClick={() => onDelete(todo.id)}
        style={{ color: 'red', cursor: 'pointer' }}
      >
        Xóa
      </button>
    </div>
  );
}

export default TodoItem;