import React, { useState } from 'react';
import './UserForm.css'; 

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <h2 className="title">Bài tập 03: Controlled Component</h2>

      <form>
        {/* Nhập Tên */}
        <div className="form-group">
          <label className="form-label">Tên:</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
          />
        </div>

        {/* Nhập Email */}
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email..."
          />
        </div>
      </form>

      <hr className="divider" />

      {/* Hiển thị kết quả */}
      <div className="result-box">
        <h3>Dữ liệu thời gian thực:</h3>
        
        <div className="result-item">
          <strong>Tên người dùng: </strong> 
          {name ? name : <span className="empty-text">(Chưa nhập)</span>}
        </div>

        <div className="result-item">
          <strong>Email: </strong> 
          {email ? email : <span className="empty-text">(Chưa nhập)</span>}
        </div>
      </div>
    </div>
  );
}

export default UserForm;