import { useState, createContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContextProps } from "../types/Auth";
import { ContextProps } from "../types/Context";

const localStorageTokenKey = "spotify-token";
const isAuth = () => !!localStorage.getItem(localStorageTokenKey);

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setAuthenticated: () => null,
  refreshAuthContext: () => null,
  logout: () => null,
});

export const AuthProvider = (props: ContextProps) => {
  const { children } = props;

  const [isAuthenticated, setAuthenticated] = useState<boolean>(isAuth);
  const navigate = useNavigate();

  const refreshAuthContext = useCallback(() => setAuthenticated(isAuth()), []);

  const logout = useCallback(() => {
    localStorage.removeItem(localStorageTokenKey);

    navigate(0);
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, refreshAuthContext, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
