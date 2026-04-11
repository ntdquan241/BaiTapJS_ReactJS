import { atom } from "recoil";

const savedUser = localStorage.getItem("user");

export const userState = atom({
  key: "userState",
  default: savedUser ? JSON.parse(savedUser) : null,
});