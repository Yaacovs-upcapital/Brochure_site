import "./home.css"
import Navbar from "../../components/navbar";
import { ReactComponent as LogoWhite } from "../../assets/icons/Logo-White-App.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as Chart } from "../../assets/icons/chart-icon.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock-icon.svg";
import { ReactComponent as Smartphone } from "../../assets/icons/smartphone-icon.svg";
import { ReactComponent as CashFlow } from "../../assets/icons/cash-flow.svg";
import { ReactComponent as Competition } from "../../assets/icons/competition-icon.svg";
import { ReactComponent as Corona } from "../../assets/icons/corona-icon.svg";
import { ReactComponent as Handshake } from "../../assets/icons/handshake-icon.svg";
import { ReactComponent as Refresh } from "../../assets/icons/refresh-icon.svg";
import { ReactComponent as SaveMoney } from "../../assets/icons/save-money-icon.svg";
import { ReactComponent as OneFingerClick } from "../../assets/icons/one-Finger-Click.svg";
import { ReactComponent as Lock } from "../../assets/icons/lock-icon.svg";


const Home = () => {
    return (
        <div className="page-container">
            <div className="home-jumbotron">
                <div className="home-jumbotron-overlay"></div>

                <div className="jumbotron-content">
                    <div>
                        <LogoWhite className="logo-white" />
                    </div>
                    <div>
                        <h1>עולם חדש של תנאי תשלום</h1>
                        <h1> לטובת כל הצדדים</h1>
                    </div>
                    <a className="arrow-link" href="#down">
                        <Arrow className="arrow-icon" />
                    </a>
                </div>
            </div>

            <div className="our-solution" id="down">
                <div>
                    <div className="our-solution-content">
                        <h2 className="our-solution-title">.הפתרון שלנו</h2>
                        <p className="our-solution-text" >פתרון בעיית תזרים מזומנים לעסקים (שוטף פלוס) באמצעות שיטה ייחודית וטכנולוגיה מתקדמת היוצרת דרכי מימון חדשות בשוק</p>
                    </div>
                    <div className="icons-row">
                        <div className="icon-wrap"><a href="" ><Chart className="chart"/></a> <span className="icon-title">כולם מרוויחים</span></div>
                        <div className="icon-wrap"><a href="" ><Clock className="clock"/></a><span className="icon-title">מנוהל באופן מלא</span></div>
                        <div className="icon-wrap"><a href="" ><Smartphone className="smartphone"/></a><span className="icon-title">דיגיטלי בקליק אחד</span></div>
                    </div>
                </div>
            </div>

            <div className="advantages">
                <div className="advantages-content">
                    <h2 className="advantages-title">.היתרונות שלנו</h2>
                    <div>
                        <div className="icon-group"><CashFlow className="icon-in"/></div>
                        <div className="icon-group"><SaveMoney className="icon-in"/></div>
                        <div className="icon-group"><Refresh className="icon-in"/></div>
                        <div className="icon-group"><OneFingerClick className="icon-in"/></div>
                        <div className="icon-group"><Corona className="icon-in"/></div>
                        <div className="icon-group"><Handshake className="icon-in"/></div>
                        <div className="icon-group"><Lock className="icon-in"/></div>
                        <div className="icon-group"><Competition className="icon-in"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
