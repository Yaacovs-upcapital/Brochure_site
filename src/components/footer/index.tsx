import { NavLink } from 'react-router-dom'
import { LogoWhite } from '../../assets/icons'
import credibilityMark from '../../assets/images/credibility-mark.png'

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
                        <li><NavLink to={"/terms-of-use"} className="link"  >תנאי שימוש</NavLink></li>
                        <li><NavLink to={"/privacy-policy/"} className="link">מדיניות</NavLink></li>
                        <li><NavLink to={"/contact-us/"} className="link">צור קשר</NavLink></li>
                    </ul>
                </div>
        
                <div className='footer-sec' style={{display:"flex", alignItems:"center", justifyContent:"center"}}><div  style={{paddingLeft:"30px"}}><img style={{height:55, width:55}} src={credibilityMark}/></div><div> <NavLink to={"/"}>< LogoWhite /></NavLink></div></div>
            </div>

        </div>
    )
}

export default Footer