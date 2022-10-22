import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { userContext } from "./context/userContext";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import PrivatePage from "./components/privatePage/PrivatePage";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/timeline"
            element={
              <PrivatePage>
                <Home />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}
