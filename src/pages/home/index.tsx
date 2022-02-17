import "./home.css"
import Navbar from "../../components/navbar";
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
import ContactForm from "../../components/contactForm";
import Carousel from "react-elastic-carousel";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import useMediaQuery from '@mui/material/useMediaQuery';




const partners = [Obelisk, Oracle, PrimeSec, Erech, BDO, Deloitte, Tadmor, PWC]
const careerPath = "../career"
const Home = () => {

    const matches = useMediaQuery('(min-width: 767px)');

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
                <div className="container">
                    <div className="our-solution-content">
                        <h2 className="our-solution-title">.הפתרון שלנו</h2>
                        <p className="our-solution-text" >פתרון בעיית תזרים מזומנים לעסקים (שוטף פלוס) באמצעות שיטה ייחודית וטכנולוגיה מתקדמת היוצרת דרכי מימון חדשות בשוק</p>
                    </div>
                    <div className="icons-row">
                        <div className="icon-wrap"><a href="" ><Chart className="chart" /></a> <span className="icon-title">כולם מרוויחים</span></div>
                        <div className="icon-wrap"><a href="" ><Clock className="clock" /></a><span className="icon-title">מנוהל באופן מלא</span></div>
                        <div className="icon-wrap"><a href="" ><Smartphone className="smartphone" /></a><span className="icon-title">דיגיטלי בקליק אחד</span></div>
                    </div>
                </div>
            </div>

            <div className="advantages">
                <div className="advantages-content container">
                    <h2 className="advantages-title">.היתרונות שלנו</h2>
                    <MobileView>
                    <Carousel isRTL={true} itemsToShow={2} pagination={false}>
                        <div className="aaa"><div className="icon-group"><SaveMoney className="icon-in" /></div><span className="icon-title-ad">הורדת עלויות ביטוח אשראי</span></div>
                        <div className="aaa"> <div className="icon-group"><Refresh className="icon-in" /></div><span className="icon-title-ad">ייעול תהליכים והקטנת עומסים</span></div>
                        <div className="aaa"><div className="icon-group"><OneFingerClick className="icon-in" /></div><span className="icon-title-ad">קבלת מימון בלחיצה אחת</span></div>
                        <div className="aaa"><div className="icon-group"><OneFingerClick className="icon-in" /></div><span className="icon-title-ad">קבלת מימון בלחיצה אחת</span></div>
                    </Carousel>
                    </MobileView>
                    <div className="icon-square">
                        <div className="aaa"><div className="icon-group"><CashFlow className="icon-in" /></div><span className="icon-title-ad">חיזוק התזרים</span></div>
                        <div className="aaa"><div className="icon-group"><SaveMoney className="icon-in" /></div><span className="icon-title-ad">הורדת עלויות ביטוח אשראי</span></div>
                        <div className="aaa"> <div className="icon-group"><Refresh className="icon-in" /></div><span className="icon-title-ad">ייעול תהליכים והקטנת עומסים</span></div>
                        <div className="aaa"><div className="icon-group"><OneFingerClick className="icon-in" /></div><span className="icon-title-ad">קבלת מימון בלחיצה אחת</span></div>
                    </div>
                    <div className="icon-square">
                        <div className="aaa"><div className="icon-group"><Corona className="icon-in" /></div><span className="icon-title-ad">הקטנת הסיכונים בעקבות הקורונה</span></div>
                        <div className="aaa"><div className="icon-group"><Handshake className="icon-in" /></div><span className="icon-title-ad">חיזוק הקשר בין הצדדים</span></div>
                        <div className="aaa"><div className="icon-group"><Lock className="icon-in" /></div><span className="icon-title-ad">ביטחון תזרימי</span></div>
                        <div className="aaa"><div className="icon-group"><Competition className="icon-in" /></div><span className="icon-title-ad">חיזוק התזרים</span></div>
                    </div>
                </div>
            </div>

            <div className="partners container">
                <h2 className="partners-title">.השותפים לדרך</h2>
                <div className="images-row">
                    {partners.map(item => (<div className="image" style={{ backgroundImage: `url(${item})` }}></div>))}
                </div>
            </div>

            <div className="articles container">
                <h2 className="articles-title">.מאמרים</h2>
                <MediaControlCard image={workingteam} path="/blog/:אומת+הפינטק/">
                    <h2 className="card-title">אומת הפינטק: הזווית הישראלית של הטכנולוגיה הפיננסית</h2>
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
                <Button variant="contained" style={{ backgroundColor: "#2f439a", padding: "7px 20px", fontFamily: '"Helvetica Hebrew",Sans-serif', fontSize: "20px", fontWeight: "700", width: "auto" }}><ChevronLeft />מאמרים נוספים </Button>
            </div>

            <div className="career-container container">

                <div className="career-title"><h3>.קריירה</h3></div>
                <div className="career-content">
                    <div className="career-photos">
                        <img className="large-photo" src={interview} />
                        <img className="small-photo" src={smiling} />
                    </div >
                    <div className="text-container">
                        <div className="text-wrapper">
                            <div className="career-second-title"><h3 style={{ margin: "0", lineHeight: "1" }}>.קריירה באפ קפיטל</h3></div>
                            <div className="career-third-title"><p style={{ marginTop: "0", lineHeight: "1" }}> !מחפשת אותך Up Capital</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}> .מביאה בשורה מהפכנית של חדשנות טכנולוגית שרותית ותפעולית לעולם האשראי החוץ בנקאי Up Capital</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}>.ערכי החברה מושתתים על – אחדות המטרה, מקצוענות ומקצועיות, לימוד ושיפור תמידיים וחברות</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}>.במידה ואתם מחפשים לגדול ולהתפתח, להיות חלק מחברה דינמית וחדשנית ומתחברים לערכי החברה – אתם מוזמנים לפנות אלינו</p></div>
                        </div>
                        <div className="jobs-btn">
                            <Button variant="contained" href={careerPath} style={{ backgroundColor: "#2f439a", padding: "7px 20px", fontFamily: '"Helvetica Hebrew",Sans-serif', fontSize: "20px", fontWeight: "700", width: "auto" }}><ChevronLeft />משרות נוספות</Button>
                        </div>
                    </div>
                </div>
                <div className="job-offers container">
                    <div className="job-title-wrap">
                        <h3 className="job-title">.משרות אחרונות</h3>
                    </div>
                    <div className="articles-row">
                        <MediaControlCard>
                            <h2 className="card-title">נציג/ת תפעול ושירות לקוחות</h2>
                            <div className="card-text">.מתן שירות ומענה ללקוחות עסקיים במגוון נושאים פיננסיים, שיחות נכנסות ויוצאות במטרה להעמיק את הקשרים עם הלקוח, תמיכה וטיפול בתהליכים תפעוליים</div>
                            <div className="job-details-wrap">
                                <div className="job-details">מספר משרה: 102</div>
                                <div className="job-details">מיקום המשרה: תל אביב</div>
                                <div className="job-details">סוג המשרה: מלאה</div>
                                <div className="job-details">תאריך אחרון להגשת מועמדות: 01/12/2021</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard>
                            <h2 className="card-title">פקיד/ת הנהלת חשבונות</h2>
                            <div className="card-text">.תפקיד כולל קליטת פקודות יומן ושקים כרטיסים, התאמות, תיוקים, קליטת חשבוניות, תשלומי חשבוניות לספקים, הכנת הוראות תשלום</div>
                            <div className="job-details-wrap">
                                <div className="job-details">מספר משרה: 201</div>
                                <div className="job-details">מיקום המשרה: תל אביב</div>
                                <div className="job-details">סוג המשרה: מלאה</div>
                                <div className="job-details">תאריך אחרון להגשת מועמדות: 01/11/2021</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard>
                            <h2 className="card-title">מנהל/ת דיגיטל</h2>
                            <div className="card-text">.בניית מענה דיגיטלי שיתמוך בניהול דיאלוג מדויק ומבוסס נתונים עם מגוון סוגי הלקוחות, לאורך כל מסע הלקוח</div>
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
                <div><ContactForm/></div>
            </div>
        </div >
    )
};

export default Home;
