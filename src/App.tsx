import { BrowserRouter } from "react-router-dom";

import Routes from "./pages/Router";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
