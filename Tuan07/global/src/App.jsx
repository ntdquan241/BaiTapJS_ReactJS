import { useState } from "react";
import { useRecoilValue } from "recoil";
import TodoInput from "./Components/bai4/TodoInput";
import TodoList from "./Components/bai4/TodoList";
// Bài 1
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";

// Bài 2
import ThemeToggle from "./Components/ThemeToggle";
import { themeState } from "./Components/ThemeState";

// Bài 3
import { userState } from "./Components/AuthState";
import Login from "./Components/Login";
import UserInfo from "./Components/UserInfo";
import Header from "./Components/Header";

export default function App() {
  const [page, setPage] = useState("bai1");

  const theme = useRecoilValue(themeState);
  const user = useRecoilValue(userState);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      {/* MENU */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("bai1")}>Bài 1</button>
        <button onClick={() => setPage("bai2")}>Bài 2</button>
        <button onClick={() => setPage("bai3")}>Bài 3</button>
      </div>

      {/* Bài 1 */}
      {page === "bai1" && (
        <div>
          <h1>Counter Global</h1>
          <ComponentA />
          <ComponentB />
        </div>
      )}

      {/* Bài 2 */}
      {page === "bai2" && (
        <div>
          <h1>Theme Toggle</h1>
          <ThemeToggle />
        </div>
      )}

      {/* Bài 3 */}
      {page === "bai3" && (
        <div>
          <h1>Auth Demo</h1>
          <Header />
          {!user ? <Login /> : <UserInfo />}
        </div>
      )}
    </div>
  );
}