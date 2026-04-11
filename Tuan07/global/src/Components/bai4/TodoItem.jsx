import { useRecoilState } from "recoil";
import { todoState } from "./todoState";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoState);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleUpdate = () => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, text: newText } : t))
    );
    setIsEditing(false);
  };

  return (
    <div style={{ marginBottom: "5px" }}>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Lưu</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Sửa</button>
          <button onClick={handleDelete}>Xóa</button>
        </>
      )}
    </div>
  );
}