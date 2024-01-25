import { useContext } from "react";
import { useOutlet } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import Login from "../../pages/login";
import VerticalMenu from "../verticalMenu";
import Footer from "../footer";

function PrivateRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  const outlet = useOutlet();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <main className="flex flex-col">
      <div className="flex min-h-[94vh]">
        <VerticalMenu />
        {outlet}
      </div>
      <Footer />
    </main>
  );
}

export default PrivateRoute;
