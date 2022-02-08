import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Layout