import React, { useState } from 'react';

function TodoInput(props) {
  const { onAdd } = props;
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn reload trang
    if (!text) return;  // Không thêm nếu rỗng

    // Gọi hàm onAdd được truyền từ cha xuống
    onAdd(text);

    // Reset ô input
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Thêm việc cần làm..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Thêm
      </button>
    </form>
  );
}

export default TodoInput;