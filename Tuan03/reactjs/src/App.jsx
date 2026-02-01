import { useState } from 'react'
import './App.css'

import UserForm from './components/Form'
import DigitalClock from './components/DigitalCLock.jsx' 
import ProductFilter from './components/ProductFilter.jsx'
import TodoApp from './components/ToDoApp.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import UserList from './components/UserList.jsx'
import ThemeExercise from './components/ThemeExercise.jsx'

function App() {
  const [currentExercise, setCurrentExercise] = useState(1);

  const renderContent = () => {
    switch (currentExercise) {
      case 1:
        return (
          <div className="exercise-wrapper">
            <h2>Bài tập: Form Input</h2>
            <UserForm />
          </div>
        );
      case 2:
        return (
          <div className="exercise-wrapper">
             <h2>Bài tập: Digital Clock (useEffect)</h2>
            <DigitalClock />
          </div>
        );
      case 3:
        return (
          <div className="exercise-wrapper">
             <h2>Bài tập: Product Filter (useMemo)</h2>
            <ProductFilter />
          </div>
        );
      case 4:
        return (
          <div className="exercise-wrapper">
             <h2>Bài tập: Todo App (useCallback & memo)</h2>
            <TodoApp />
          </div>
        );
      case 5:
        return (
          <div className="exercise-wrapper">
             <h2>Bài tập: Stopwatch (useRef)</h2>
            <Stopwatch />
          </div>
        );
      case 6:
        return (
          <div className="exercise-wrapper">
             <h2>Bài tập: User List (useReducer)</h2>
            <UserList />
          </div>
        );
      case 7:
        return (
          <div className="exercise-wrapper">
             <h2>Bài tập: Theme Context</h2>
            <ThemeExercise />
          </div>
        );
      default:
        return <p>Vui lòng chọn bài tập.</p>;
    }
  };

  return (
    <div className="App">
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        background: '#fff', 
        zIndex: 1000, 
        padding: '15px', 
        borderBottom: '2px solid #ddd',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 10px 0', textAlign: 'center' }}>Danh sách bài tập React</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button onClick={() => setCurrentExercise(1)} style={currentExercise === 1 ? styles.activeBtn : styles.btn}>
            Form
          </button>
          
          <button onClick={() => setCurrentExercise(2)} style={currentExercise === 2 ? styles.activeBtn : styles.btn}>
            Clock
          </button>
          
          <button onClick={() => setCurrentExercise(3)} style={currentExercise === 3 ? styles.activeBtn : styles.btn}>
            Filter
          </button>
          
          <button onClick={() => setCurrentExercise(4)} style={currentExercise === 4 ? styles.activeBtn : styles.btn}>
            Todo
          </button>
          
          <button onClick={() => setCurrentExercise(5)} style={currentExercise === 5 ? styles.activeBtn : styles.btn}>
            Stopwatch
          </button>
          
          <button onClick={() => setCurrentExercise(6)} style={currentExercise === 6 ? styles.activeBtn : styles.btn}>
            Users
          </button>
          
          <button onClick={() => setCurrentExercise(7)} style={currentExercise === 7 ? styles.activeBtn : styles.btn}>
            Theme
          </button>
        </div>
      </div>

      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {renderContent()}
      </div>
    </div>
  )
}

const styles = {
  btn: {
    padding: '8px 15px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  activeBtn: {
    padding: '8px 15px',
    cursor: 'pointer',
    backgroundColor: '#646cff',
    color: 'white',
    border: '1px solid #646cff',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

export default App