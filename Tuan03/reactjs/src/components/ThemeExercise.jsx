import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './Theme.css'; 

// --- Cấp 4: Button (Component sâu nhất) ---
// Sử dụng useContext để lấy hàm toggleTheme trực tiếp mà không cần props từ cha
const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      className={`theme-btn ${theme}`} 
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙 Chuyển sang Tối' : '☀️ Chuyển sang Sáng'}
    </button>
  );
};

// --- Cấp 3: Card (Component trung gian) ---
const Card = () => {
  return (
    <div className="card">
      <h4>Component Card</h4>
      <p>Nội dung này nằm trong Card, Card nằm trong Layout.</p>
      <ThemeButton /> {/* Button nằm trong Card */}
    </div>
  );
};

// --- Cấp 2: Layout (Component bao bọc) ---
// Sử dụng useContext để lấy theme apply vào class CSS
const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`layout ${theme}`}>
      <h3>Bài 7: Theme Context & LocalStorage</h3>
      <p>Giao diện hiện tại: <strong>{theme.toUpperCase()}</strong></p>
      <Card />
    </div>
  );
};

// --- Cấp 1: App (Root của bài tập này) ---
// Bao bọc toàn bộ UI bằng ThemeProvider
const ThemeExercise = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default ThemeExercise;