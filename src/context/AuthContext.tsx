import { useState, createContext, ReactNode } from "react";

const localStorageTokenKey = "spotify-token";

interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  refreshAuthContext: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const isAuth = () => !!localStorage.getItem(localStorageTokenKey);

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setAuthenticated: () => null,
  refreshAuthContext: () => null,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(isAuth);

  const refreshAuthContext = () => setAuthenticated(isAuth());

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, refreshAuthContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};
