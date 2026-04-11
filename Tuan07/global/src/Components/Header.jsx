import { useRecoilValue } from "recoil";
import { userState } from "./AuthState";

export default function Header() {
  const user = useRecoilValue(userState);

  return (
    <div>
      {user ? <p>👤 {user.username}</p> : <p>Guest</p>}
    </div>
  );
}