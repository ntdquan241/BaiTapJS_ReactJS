import React, { useState, useCallback } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task mẫu 1', completed: false },
    { id: 2, text: 'Task mẫu 2', completed: true },
    { id: 3, text: 'Task mẫu 3', completed: false },
  ]);

  const handleAdd = useCallback((text) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text, completed: false }
    ]);
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos(prevTodos => prevTodos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h3>Bài 4: Optimization (memo & useCallback)</h3>
      <TodoInput onAdd={handleAdd} />
      
      <div>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp; 