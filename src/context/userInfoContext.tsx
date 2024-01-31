import { useState, createContext, useContext, useEffect } from "react";

import { UserContextProps, UserState } from "../types/User";
import { ContextProps } from "../types/Context";
import { AuthContext } from "./authContext";
import { GetUserInfo } from "../api/User";

export const UserContext = createContext<UserContextProps>({ user: null });

export function UserInfoProvider(props: ContextProps): JSX.Element {
  const { children } = props;

  const [user, setUser] = useState<UserState>(null);

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    async function getUserInfo() {
      const data = await GetUserInfo();

      setUser(data);
    }

    isAuthenticated && getUserInfo();
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
