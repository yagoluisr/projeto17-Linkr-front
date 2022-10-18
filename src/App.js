import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./assets/styles/GlobalStyles";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}