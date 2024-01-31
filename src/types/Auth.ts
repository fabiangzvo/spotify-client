export interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  refreshAuthContext: () => void;
  logout: () => void;
}
