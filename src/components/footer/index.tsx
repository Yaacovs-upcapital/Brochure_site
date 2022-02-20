import { textAlign } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { LogoBlue, LogoWhite } from '../../assets/icons'

import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-wrap'>
                <div className='footer-sec' >
                    <p>
                        © 2020 Up Capital. All Rights Reserved.
                    </p>
                </div>
                <div className='footer-sec' >
                    <ul>
                        <li><NavLink to={"/terms-of-use"} className="link" >תנאי שימוש</NavLink></li>
                        <li><NavLink to={"/privacy-policy/"} className="link">מדיניות</NavLink></li>
                        <li><NavLink to={"/contact-us/"} className="link">צור קשר</NavLink></li>
                    </ul>
                </div>
                <div className='footer-sec' ><NavLink to={"/"}>< LogoWhite /></NavLink></div>

            </div>

        </div>
    )
}

export default Footer