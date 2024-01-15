import { useContext } from "react";
import { useOutlet } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import Login from "../../pages/login";
import VerticalMenu from "../verticalMenu";

function PrivateRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  const outlet = useOutlet();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <main className="flex">
      <VerticalMenu />
      {outlet}
    </main>
  );
}

export default PrivateRoute;
