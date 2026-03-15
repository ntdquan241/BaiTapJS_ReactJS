import React, { useState, useEffect } from 'react';

function Bai5() {
  // Thay bằng link MockAPI của bạn (ví dụ: https://6605...mockapi.io/api/v1/todos)
  const API_URL = 'https://698311209c3efeb892a4457f.mockapi.io/books';

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  // Các state quản lý trạng thái UI
  const [isLoading, setIsLoading] = useState(false); // Dùng cho GET ban đầu
  const [isSubmitting, setIsSubmitting] = useState(false); // Bonus: Disable nút khi đang POST
  const [error, setError] = useState(''); // Handle error

  // ==========================================
  // 1. GET: Lấy danh sách Todo
  // ==========================================
  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Lỗi khi tải dữ liệu từ server!');
        
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // ==========================================
  // 2. POST: Thêm Todo mới (Update UI sau khi API thành công)
  // ==========================================
  const handleAddTodo = async (e) => {
    e.preventDefault(); // Chặn load lại trang khi submit form
    if (!newTodo.trim()) return;

    setIsSubmitting(true); // Bắt đầu gửi -> Disable nút
    setError('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Khai báo Body là JSON
        },
        body: JSON.stringify({ title: newTodo, completed: false }), // Dữ liệu gửi đi
      });

      if (!response.ok) throw new Error('Không thể thêm Todo mới!');

      const data = await response.json(); // Data trả về chứa ID thật từ server
      
      // Update UI: Thêm todo mới vào danh sách hiện tại
      setTodos([...todos, data]); 
      setNewTodo(''); // Xóa trắng ô input
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false); // Xong việc -> Mở khóa nút
    }
  };

  // ==========================================
  // 3. DELETE: Xóa Todo (Bonus: Optimistic UI)
  // ==========================================
  const handleDelete = async (id) => {
    // OPTIMISTIC UI: Giả định API sẽ thành công -> Xóa luôn trên màn hình cho mượt
    const previousTodos = [...todos]; // Lưu lại bản sao phòng khi lỗi
    setTodos(todos.filter(todo => todo.id !== id)); // Cập nhật UI ngay lập tức

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Xóa thất bại trên server!');
      // Nếu thành công, không cần làm gì thêm vì UI đã cập nhật trước đó rồi.

    } catch (err) {
      // Nếu API lỗi -> Báo lỗi và ROLLBACK (khôi phục) lại dữ liệu cũ trên UI
      alert('Có lỗi xảy ra, không thể xóa! Dữ liệu sẽ được khôi phục.');
      setTodos(previousTodos); 
    }
  };

  // ==========================================
  // GIAO DIỆN (UI)
  // ==========================================
  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2>Bài 5: CRUD Todo (Real-world)</h2>

      {/* Thông báo lỗi chung */}
      {error && <div style={{ color: 'red', marginBottom: '10px', padding: '10px', background: '#fee' }}>{error}</div>}

      {/* FORM THÊM MỚI */}
      <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nhập công việc mới..."
          style={{ flex: 1, padding: '8px' }}
          disabled={isSubmitting} // Khóa input khi đang submit
        />
        <button 
          type="submit" 
          disabled={isSubmitting || !newTodo.trim()} // Bonus: Disable nút
          style={{ 
            padding: '8px 16px', 
            cursor: isSubmitting ? 'wait' : 'pointer',
            background: isSubmitting ? '#ccc' : '#28a745',
            color: '#fff',
            border: 'none'
          }}
        >
          {isSubmitting ? 'Đang thêm...' : 'Thêm'}
        </button>
      </form>

      {/* DANH SÁCH TODO */}
      {isLoading ? (
        <p>Đang tải danh sách công việc...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
              <span>{todo.title}</span>
              <button 
                onClick={() => handleDelete(todo.id)}
                style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
              >
                Xóa
              </button>
            </li>
          ))}
          {todos.length === 0 && !error && <p>Chưa có công việc nào.</p>}
        </ul>
      )}
    </div>
  );
}

export default Bai5;