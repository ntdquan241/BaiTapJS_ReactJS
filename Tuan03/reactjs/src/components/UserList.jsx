import React, { useReducer, useEffect } from 'react';
import './UserList.css';

// 1. Định nghĩa Initial State
const initialState = {
  status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
  data: [],
  error: null
};

// 2. Định nghĩa Reducer (Pure Function)
function userReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { 
        ...state, 
        status: 'loading', 
        error: null 
      };
    case 'FETCH_SUCCESS':
      return { 
        ...state, 
        status: 'success', 
        data: action.payload,
        error: null 
      };
    case 'FETCH_ERROR':
      return { 
        ...state, 
        status: 'error', 
        error: action.payload 
      };
    default:
      return state;
  }
}

function UserList() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: 'FETCH_START' });

    try {
      // Giả lập delay 1 giây để thấy rõ trạng thái Loading
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Gọi API thực tế
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('Lỗi kết nối server!');
      }

      const data = await response.json();
      
      // Giả lập lỗi ngẫu nhiên (50% cơ hội lỗi) để bạn test nút Retry
      // Mở dòng dưới đây nếu muốn test Error liên tục
      // if (Math.random() > 0.5) throw new Error("Lỗi ngẫu nhiên mô phỏng!");

      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  };

  // Tự động fetch lần đầu khi mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h3>Bài 6: useReducer State Machine</h3>

      {/* --- TRẠNG THÁI: LOADING --- */}
      {state.status === 'loading' && (
        <div className="status-box loading">
          <div className="spinner"></div>
          <p>Đang tải dữ liệu...</p>
        </div>
      )}

      {/* --- TRẠNG THÁI: ERROR --- */}
      {state.status === 'error' && (
        <div className="status-box error">
          <p>⚠️ Đã xảy ra lỗi: {state.error}</p>
          <button className="btn-retry" onClick={fetchUsers}>
            Thử lại (Retry)
          </button>
        </div>
      )}

      {/* --- TRẠNG THÁI: SUCCESS --- */}
      {state.status === 'success' && (
        <div className="user-grid">
          {state.data.map(user => (
            <div key={user.id} className="user-card">
              <h4>{user.name}</h4>
              <p>@{user.username}</p>
              <small>{user.email}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;