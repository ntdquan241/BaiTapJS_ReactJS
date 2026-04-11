import { useRecoilState } from "recoil";
import { userState } from "./AuthState";

export default function UserInfo() {
  const [user, setUser] = useRecoilState(userState);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (!user) return <p>Chưa đăng nhập</p>;

  return (
    <div>
      <h3>Xin chào, {user.username}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}