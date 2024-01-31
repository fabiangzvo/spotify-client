import { useContext } from "react";
import { useOutlet } from "react-router-dom";

import { AuthContext } from "../../context/authContext";
import Login from "../../pages/login";
import VerticalMenu from "../verticalMenu";
import Footer from "../footer";
import Navbar from "../navbar";

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
        <div>
          <Navbar />
          {outlet}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default PrivateRoute;
