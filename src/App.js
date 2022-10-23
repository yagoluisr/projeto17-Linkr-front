import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { userContext, renderTimeLineContext } from "./context/userContext";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import PrivatePage from "./components/privatePage/PrivatePage";
import UserPage from "./components/userPage/userPosts";
import HashtagsPage from "./pages/hashtagsPage/hashtagsPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [renderTimeline, setRender] = useState(false);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <renderTimeLineContext.Provider value={{ renderTimeline, setRender }}>
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
            <Route
              path="/user/:id"
              element={
                <PrivatePage>
                  <UserPage />
                </PrivatePage>
              }
            />
            <Route
              path="/hashtag/:hashtag"
              element={
                <PrivatePage>
                  <HashtagsPage />
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </renderTimeLineContext.Provider>
    </userContext.Provider>
  );
}
