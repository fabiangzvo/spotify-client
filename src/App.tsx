import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Routes from "./pages/Router";
import { AuthProvider } from "./context/authContext";
import { UserInfoProvider } from "./context/userInfoContext";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserInfoProvider>
          <Routes />
        </UserInfoProvider>
        <Analytics />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
