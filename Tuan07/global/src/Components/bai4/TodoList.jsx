import { useRecoilValue } from "recoil";
import { todoState } from "./todoState";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useRecoilValue(todoState);

  if (todos.length === 0) return <p>Chưa có todo nào</p>;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}