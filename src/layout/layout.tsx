import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import About from "../pages/aboutUs";
import Blog from "../pages/blog";
import Career from "../pages/career";
import Contact from "../pages/contact";
import FintechNation from "../pages/fintechNation";
import Home from "../pages/home";
import Solution from "../pages/solution";

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/our-solution/" element={<Solution/>}/>
                <Route path="/about-us" element={<About/>}/>
                <Route path="/blog/" element={<Blog/>}/>
                <Route path="/career/" element={<Career/>}/>
                <Route path="/contact-us/" element={<Contact/>}/>
                <Route path="/blog/fintechNation/" element={<FintechNation/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default Layout