import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Routes from "./pages/Router";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <Analytics />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
