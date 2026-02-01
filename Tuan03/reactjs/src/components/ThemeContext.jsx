import React, { createContext, useState, useEffect } from 'react';

// 1. Tạo Context
export const ThemeContext = createContext();

// 2. Tạo Provider (Component cung cấp dữ liệu)
export const ThemeProvider = ({ children }) => {
  // Bonus: Khởi tạo state từ localStorage (nếu có)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app_theme');
    return savedTheme || 'light'; // Mặc định là light
  });

  // Bonus: Mỗi khi theme đổi, lưu lại vào localStorage
  useEffect(() => {
    localStorage.setItem('app_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Giá trị sẽ được truyền đi toàn bộ ứng dụng con
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};