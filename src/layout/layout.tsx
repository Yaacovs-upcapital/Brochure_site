import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import About from "../pages/aboutUs";
import Blog from "../pages/blog";
import Career from "../pages/career";
import ContactUs from "../pages/contactUs";
import FintechNation from "../pages/fintechNation";
import Home from "../pages/home";
import Solution from "../pages/solution";
import Navbar from "../components/navbar";

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/our-solution/" element={<Solution />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/career/" element={<Career />} />
                <Route path="/contact-us/" element={<ContactUs />} />
                <Route path="/fintechNation/" element={<FintechNation />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Layout