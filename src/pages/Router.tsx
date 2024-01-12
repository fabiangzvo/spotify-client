import { Routes, Route } from "react-router-dom";

import PrivateRoute from "../components/privateRoute";
import Home from "./home";

function Router() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
