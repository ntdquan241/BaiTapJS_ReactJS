import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ flex: 1, padding: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Thêm</button>
    </form>
  );
}

export default React.memo(TodoInput);