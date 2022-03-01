import React from 'react'
import { NavLink } from 'react-router-dom';
import useWindowSize from '../windowSize';
const NavbarItems = () => {
  return (
    <div>
      <ul style={{ display: useWindowSize() <= 910 ? "none" : '' }}>
        <li><NavLink to={"/"} className="link">בית</NavLink></li>
        <li><NavLink to={"/our-solution/"} className="link">הפתרון שלנו</NavLink></li>
        <li><NavLink to={"/about-us/"} className="link">מי אנחנו</NavLink></li>
        <li><NavLink to={"/blog/"} className="link">מאמרים</NavLink></li>
        <li><NavLink to={"/career/"} className="link">קריירה</NavLink></li>
        <li ><NavLink to={"/contact-us/"} className="link" >צור קשר</NavLink></li>
        <li><NavLink to={"/app/"} className="link-button">ספקים</NavLink></li>
        <li ><NavLink to={"/app/"} className="link-button">קניינים</NavLink></li>
      </ul>
    </div>
  )
}

export default NavbarItems