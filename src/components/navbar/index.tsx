import "./navbar.css"
import { LogoWhite } from "../../assets/icons"
import { LogoBlue } from "../../assets/icons"
import { Link, NavLink } from "react-router-dom"
import{ useEffect, useState } from 'react';
import useWindowSize from "../windowSize";
import NavbarItems from "../NavbarItems";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { fontSize } from "@mui/system";
import TempDrawer from "../drawer";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => setScrolled(window.scrollY > 60);

  useEffect(() => {
    // clean up code
      // window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
 
  
  
  return (
    <div className={`navbar ${scrolled?"light":"dark"}`}>
      <div className="navbar-wrap"  >
        <div><NavLink to={"/"}>{scrolled?<LogoBlue />:< LogoWhite/>}</NavLink></div>
          <NavbarItems />
        {useWindowSize()<=910?<TempDrawer /> :''}
      </div></div>
  )
}

export default Navbar
