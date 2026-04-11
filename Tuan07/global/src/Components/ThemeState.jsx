import { atom } from "recoil";

const savedTheme = localStorage.getItem("theme");

export const themeState = atom({
  key: "themeState",
  default: savedTheme ? savedTheme : "light",
});