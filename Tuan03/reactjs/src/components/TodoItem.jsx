import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  console.log(`Render item: ${todo.id}`);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #eee'
    }}>
      <div 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </div>
      <button 
        onClick={() => onDelete(todo.id)}
        style={{ marginLeft: '10px', color: 'red' }}
      >
        Xóa
      </button>
    </div>
  );
}

export default React.memo(TodoItem);