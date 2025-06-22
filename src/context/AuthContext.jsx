import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedAuth = sessionStorage.getItem("isAuthenticated");
    const savedUser = sessionStorage.getItem("user");
    if (savedAuth === "true" && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    if (email === "student@portal.com" && password === "password") {
      const userData = { name: "Sakshi", email: email };
      setIsAuthenticated(true);
      setUser(userData);
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
