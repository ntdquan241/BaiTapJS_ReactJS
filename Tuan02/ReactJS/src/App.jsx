import React, { useState } from 'react';

// Import toàn bộ components con
import Header from './components/Header';
import Footer from './components/Footer';
import StudentInfo from './components/StudentInfo';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import StatusBadge from './components/StatusBadge';
import TodoInput from './components/ToDoInput';
import TodoList from './components/ToDoList';

function App() {
  const [currentExercise, setCurrentExercise] = useState(1);
  const [currentStatus, setCurrentStatus] = useState('online');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React cơ bản' },
    { id: 2, text: 'Làm bài tập về nhà' }
  ]);

  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text: text };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  const renderExercise = () => {
    switch (currentExercise) {
      case 1:
        return (
          <div style={{ textAlign: 'center' }}>
            <h3>Bài 1: Component & Props</h3>
            <StudentInfo 
              hoTen="Nguyễn Trần Dân Quân" 
              mssv="23637841" 
              lop="DHKTPM19ATT" 
            />
          </div>
        );
      
      case 2:
        return (
          <div style={{ textAlign: 'center' }}>
            <h3>Bài 2: Counter State</h3>
            <Counter />
          </div>
        );

      case 3:
        return (
          <div>
            <h3>Bài 3: Form Input (Controlled Component)</h3>
            <UserForm />
          </div>
        );

      case 4:
        return (
          <div style={{ padding: '20px' }}>
            <h3>Bài 4: Style & Dynamic Class</h3>
            <div style={{ marginBottom: '20px' }}>
              <strong>Trạng thái: </strong>
              <StatusBadge status={currentStatus} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setCurrentStatus('online')}>Online</button>
              <button onClick={() => setCurrentStatus('busy')}>Busy</button>
              <button onClick={() => setCurrentStatus('offline')}>Offline</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h3>Bài 5: Todo App (CRUD cơ bản)</h3>
            <TodoInput onAdd={handleAddTodo} />
            <TodoList todos={todos} onDelete={handleDeleteTodo} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      
      {/* MENU CHỌN BÀI TẬP */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#eee', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px',
        borderBottom: '1px solid #ccc'
      }}>
        <button onClick={() => setCurrentExercise(1)}>Bài 1</button>
        <button onClick={() => setCurrentExercise(2)}>Bài 2</button>
        <button onClick={() => setCurrentExercise(3)}>Bài 3</button>
        <button onClick={() => setCurrentExercise(4)}>Bài 4</button>
        <button onClick={() => setCurrentExercise(5)}>Bài 5</button>
      </div>

      {/* KHU VỰC HIỂN THỊ NỘI DUNG BÀI TẬP */}
      <div style={{ minHeight: '60vh', padding: '30px' }}>
        {renderExercise()}
      </div>

      <Footer />
    </div>
  );
}

export default App;