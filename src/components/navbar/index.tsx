import "./navbar.css"
import { LogoWhite } from "../../assets/icons"
import { LogoBlue } from "../../assets/icons"
import { Link, NavLink } from "react-router-dom"
import{ useEffect, useState } from 'react';
import { styled } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";


const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => setScrolled(window.scrollY > 60);

  useEffect(() => {
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
 
  
  
  return (
    <div className={`navbar ${scrolled?"light":"dark"}`}>
      <div className="navbar-wrap" >
        <div><NavLink to={"/"}>{scrolled?<LogoBlue />:< LogoWhite/>}</NavLink></div>
        <ul>
          <li><NavLink to={"/"}  className="link" >בית</NavLink></li>
          <li><NavLink to={"/our-solution/"} className="link">הפתרון שלנו</NavLink></li>
          <li><NavLink to={"/about-us/"} className="link">מי אנחנו</NavLink></li>
          <li><NavLink to={"/blog/"} className="link">מאמרים</NavLink></li>
          <li><NavLink to={"/career/"} className="link">קריירה</NavLink></li>
          <li><NavLink to={"/contact-us/"} className="link">צור קשר</NavLink></li>
          <li><NavLink to={"/"} className="link-button">ספקים</NavLink></li>
          <li className="list-item"><NavLink to={"/"} className="link-button">קניינים</NavLink></li>
        </ul>
      </div></div>
  )
}

export default Navbar
