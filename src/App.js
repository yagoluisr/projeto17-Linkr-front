import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import TrendingHashtags from "./components/Trending/TrendingHashtags";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Home />} />
        <Route path="/hashtag/:hashtag" element={<TrendingHashtags />} />
      </Routes>
    </BrowserRouter>
  );
}
