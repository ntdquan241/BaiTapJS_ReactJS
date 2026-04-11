import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "./AuthState";

export default function Login() {
  const [username, setUsername] = useState("");
  const setUser = useSetRecoilState(userState);

  const handleLogin = () => {
    const user = { username };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}