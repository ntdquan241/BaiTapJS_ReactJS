import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "./todoState";

export default function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}