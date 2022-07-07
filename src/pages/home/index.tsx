import "./home.css"
import { LogoWhite, Arrow, Chart, Clock, Smartphone, CashFlow, Competition, Corona, Handshake, Refresh, SaveMoney, OneFingerClick, Lock } from "../../assets/icons";
import Deloitte from "../../assets/images/deloitte-digital.png";
import Erech from "../../assets/images/erechlogo.png";
import Oracle from "../../assets/images/oracle.png";
import BDO from "../../assets/images/bdo.png";
import Obelisk from "../../assets/images/obelisk.png";
import PrimeSec from "../../assets/images/prime-sec.png";
import PWC from "../../assets/images/pwc.png";
import Tadmor from "../../assets/images/tadmor.png";
import MediaControlCard from "../../components/card";
import workingteam from "../../assets/images/working-team.jpg";
import interview from "../../assets/images/interview.webp"
import smiling from "../../assets/images/smiling.webp"
import { Button } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ContactForm from "../../components/contactForm";
import useWindowSize from "../../components/windowSize";
import { useRef } from "react";
import Slider from 'infinite-react-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from "react-router-dom";
import { FormattedMessage, } from 'react-intl';
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { i18n } from "../../translations/i18n";
// import { t } from "i18next";
const partners = [Obelisk, Oracle, PrimeSec, Erech, BDO, Deloitte, Tadmor, PWC]
const careerPath = "../career"



const Home = (props) => {
    const { t } = useTranslation();
    const lang= i18n.language
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        slidesPerRow: 2,
        dots: true,
        prevArrow: <div style={{ margin: "0", position: "absolute" }}><ArrowBackIosNewIcon style={{ color: "#fff" }} /></div>,
        nextArrow: <div style={{ margin: "0", position: "absolute" }}><ArrowForwardIosIcon style={{ color: "#fff" }} /></div>,
    };

    const settings1 = {
        autoplay: true,
        autoplaySpeed: 5000,
        slidesPerRow: 4,
        dots: true,
        arrows: false,
    };
    const carouselItems = [
        <div className="advantage-item"><div className="icon-group"><CashFlow className="icon-in" /></div><span className="icon-title-ad">{t("cash")}</span></div>,
        <div className="advantage-item"><div className="icon-group"><SaveMoney className="icon-in" /></div><span className="icon-title-ad">{t("reduce")}</span></div>,
        <div className="advantage-item"> <div className="icon-group"><Refresh className="icon-in" /></div><span className="icon-title-ad">{t("streamline")}</span></div>,
        <div className="advantage-item"><div className="icon-group"><OneFingerClick className="icon-in" /></div><span className="icon-title-ad">{t("onclick")}</span></div>,
        <div className="advantage-item"><div className="icon-group"><Corona className="icon-in" /></div><span className="icon-title-ad">{t("corona")}</span></div>,
        <div className="advantage-item"><div className="icon-group"><Handshake className="icon-in" /></div><span className="icon-title-ad">{t("relationship")}</span></div>,
        <div className="advantage-item"><div className="icon-group"><Lock className="icon-in" /></div><span className="icon-title-ad">{t("cash_secure")}</span></div>,
        <div className="advantage-item"><div className="icon-group"><Competition className="icon-in" /></div><span className="icon-title-ad">{t("competitive")}</span></div>,
    ]

    return (
        <div className="page-container">
            <div className="home-jumbotron">
                <div className="home-jumbotron-overlay"></div>

                <div className="jumbotron-content">
                    <div>
                        <LogoWhite className="logo-white" />
                    </div>
                    <div>
                        <h1>{t("homeHeader_1")}</h1>
                        <h1>{t("homeHeader_2")}</h1>
                    </div>
                    <div className="arrow-link" >
                        <Arrow className="arrow-icon" />
                    </div>
                </div>
            </div>

            <div className="our-solution" >
                <div className="container">
                    <div className="our-solution-content">
                        <h2 className="our-solution-title">{t('our_solution')}</h2>
                        <p className="our-solution-text" >{t("our_solution_text")}</p>
                    </div>
                    <div className="icons-row">
                        <div className="icon-wrap"><div className="circle"><Chart className="solution-icon" /></div> <span className="icon-title">{t("win_win")}</span></div>
                        <div className="icon-wrap"><div className="circle"><Clock className="solution-icon" /></div><span className="icon-title">{t("supply_chain")}</span></div>
                        <div className="icon-wrap"><div className="circle"><Smartphone className="solution-icon" /></div><span className="icon-title">{t("digital")}</span></div>
                    </div>
                </div>
            </div>
            <div className="advantages">
                <div className="advantages-content">
                    <h2 className="advantages-title">{t("benefits")}</h2>
                    {useWindowSize() <= 767 ?
                        <div className="carousel-wrapper">
                            <Slider {...settings}>
                                {carouselItems.map(item => <div >{item}</div>)}
                            </Slider>
                        </div> :
                        <div className="icon-square">
                            {carouselItems.map(item => <div>{item}</div>)}
                        </div>}
                </div>
            </div>

            <div className="partners container" >
                <h2 className="partners-title">{t("partners")}</h2>
                {useWindowSize() <= 767 ?
                    <div className="carousel-wrapper">
                        <Slider {...settings1}>
                            {partners.map(item => (<div className="carousel-item-dv" ><img className="image-carousel" src={`${item}`} /></div>))}

                        </Slider>
                    </div>
                    :
                    <div className="images-row">
                        {partners.map(item => (<div className="image" style={{ backgroundImage: `url(${item})` }}></div>))}
                    </div>}
            </div>

            <div className="articles container">
                <h2 className="articles-title">{t("blog")}</h2>
                <MediaControlCard image={workingteam} path="/blog/:אומת+הפינטק/">
                    <h2 className="card-title" >{t("fintech_nation")}</h2>
                    <div className="card-text">
                        באומת הסטארטפ היתה זו רק שאלה של זמן עד שהטכנולוגיה תפרוץ גם אל תוך העולם הפיננסי המסורתי. בשנים האחרונות תחום הפינטק נחשב לאחד התחומים המתפתחים ביותר ושירותים רבים של מוצרים פיננסיים בשלל תחומים כדוגמת סליקה, אמצעי תשלום, ניהול השקעות ואשראי עוברים טרנספורמציה בחסות הטכנולוגי</div>
                </MediaControlCard>
            </div>
            <div className="articles-row container">
                <MediaControlCard path="/blog/:העסק+שלי+והבנק/"><h2 className="card-title">העסק שלי והבנק: כלל הזהב לזוגיות מוצלחת</h2><div className="card-text">מעטים האנשים שיכולים לומר בפה מלא כי אינם חשים כל חשש בשעה שמכשיר הטלפון מצלצל ועל הצג מופיע השם של הבנקאי.</div></MediaControlCard>
                <MediaControlCard path="/blog/:חשיבות+ההון+החוזר/"><h2 className="card-title">חשיבות ההון החוזר לעסק חדש וקיים</h2><div className="card-text">בכדי לנהל עסק מצליח, לצד חזון ועבודה קשה, צריך להכיר את המספרים והמדדים אשר מרכיבים אותו מקרוב.</div></MediaControlCard>
                <MediaControlCard path="/blog/:רוורס+פקטורינג/"><h2 className="card-title">דווקא עכשיו רוורס פקטורינג</h2><div className="card-text">בשעה שעומדים בפני התקשרות מול גופים גדולים, הספקים נדרשים לקחת בחשבון מראש פרמטרים רבים כדוגמת: העלות המימונית שלו.</div></MediaControlCard>
            </div>
            <div className="article-btn">
                <NavLink to="./blog/" className="articles-btn"><ChevronLeft />מאמרים נוספים </NavLink>
            </div>

            <div className="career-container container">

                <div className="career-title"><h3>.{t("career")}</h3></div>
                <div className="career-content">
                   
                    <div className="text-container">
                        <div className="text-wrapper">
                            <div className="career-second-title"><h3 style={{ margin: "0", lineHeight: "1" }}>{t("career_up")}.</h3></div>
                            <div className="career-third-title"><p style={{ marginTop: "0", lineHeight: "1" }}>{t("hiring")}!</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}>{t("goal")}.</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}>{t("values")}.</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", display:lang=="en"?"none":"" }}>{t("apply")}</p></div>
                        </div>
                        <div className="jobs-btn">
                            <Button variant="contained" href={careerPath} style={{ backgroundColor: "#2f439a", padding: "7px 20px", fontFamily: '"Helvetica Hebrew",Sans-serif', fontSize: "20px", fontWeight: "700", width: "auto" }}>{t("applications")}{lang=="en"?<ChevronRight/>:<ChevronLeft />}</Button>
                        </div>
                    </div>
                    <div className="career-photos">
                        <img className="large-photo" src={interview} />
                        <img className="small-photo" src={smiling} />
                    </div >
                </div>
                <div className="job-offers container">
                    <div className="job-title-wrap">
                        <h3 className="job-title">{t("latest_jobs")}.</h3>
                    </div>
                    <div className="articles-row">
                        <MediaControlCard>
                            <h2 className="card-title">נציג/ת תפעול ושירות לקוחות</h2>
                            <div className="card-text">מתן שירות ומענה ללקוחות עסקיים במגוון נושאים פיננסיים, שיחות נכנסות ויוצאות במטרה להעמיק את הקשרים עם הלקוח, תמיכה וטיפול בתהליכים תפעוליים.</div>
                            <div className="job-details-wrap">
                                <div className="job-details">מספר משרה: 102</div>
                                <div className="job-details">מיקום המשרה: תל אביב</div>
                                <div className="job-details">סוג המשרה: מלאה</div>
                                <div className="job-details">תאריך אחרון להגשת מועמדות: 01/12/2021</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard>
                            <h2 className="card-title">פקיד/ת הנהלת חשבונות</h2>
                            <div className="card-text">תפקיד כולל קליטת פקודות יומן ושקים כרטיסים, התאמות, תיוקים, קליטת חשבוניות, תשלומי חשבוניות לספקים, הכנת הוראות תשלום.</div>
                            <div className="job-details-wrap">
                                <div className="job-details">מספר משרה: 201</div>
                                <div className="job-details">מיקום המשרה: תל אביב</div>
                                <div className="job-details">סוג המשרה: מלאה</div>
                                <div className="job-details">תאריך אחרון להגשת מועמדות: 01/11/2021</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard>
                            <h2 className="card-title">מנהל/ת דיגיטל</h2>
                            <div className="card-text">בניית מענה דיגיטלי שיתמוך בניהול דיאלוג מדויק ומבוסס נתונים עם מגוון סוגי הלקוחות, לאורך כל מסע הלקוח.</div>
                            <div className="job-details-wrap">
                                <div className="job-details">מספר משרה: 301</div>
                                <div className="job-details">מיקום המשרה: תל אביב</div>
                                <div className="job-details">סוג המשרה: מלאה</div>
                                <div className="job-details">תאריך אחרון להגשת מועמדות: 01/12/2021</div>
                            </div>
                        </MediaControlCard>

                    </div>
                </div>

            </div >
            <div className="contact">
                <div className="contact-wrapper" ><ContactForm /></div>
            </div>
        </div >
    )
};

export default Home;
