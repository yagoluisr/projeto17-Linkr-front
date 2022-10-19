import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";
import SignUp from "./components/SignUp/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </BrowserRouter>
    );
}