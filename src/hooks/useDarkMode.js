import { useDarkMode as useDarkModeContext } from "../context/DarkModeContext";

export const useDarkMode = () => {
  return useDarkModeContext();
};
