import MediaControlCard from "../../components/card";
import interview from "../../assets/images/interview.webp"
import smiling from "../../assets/images/smiling.webp"
import useWindowSize from "../../components/windowSize";
import { t } from "i18next";

const Career = () => {

    const cardStyle = useWindowSize()<=767? {width:"100%", marginTop:"0px"}:{width:"30%", marginTop:"50px"};
    return (
        <div>
            <div className="bg-img" ><h1>{t("career")}</h1><h1 style={{color:"red"}}>.</h1></div>
            <div className="career-container container" >

                
                <div className="career-content">
                    
                    <div className="text-container">
                        <div className="text-wrapper">
                            <div className="career-second-title"><h3 style={{ margin: "0", lineHeight: "1" }}>קריירה באפ קפיטל.</h3></div>
                            <div className="career-third-title"><p style={{ marginTop: "0", lineHeight: "1" }}>Up Capital מחפשת אותך !</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}> מביאה בשורה מהפכנית של חדשנות טכנולוגית שרותית ותפעולית לעולם האשראי החוץ בנקאי Up Capital.</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}>ערכי החברה מושתתים על – אחדות המטרה, מקצוענות ומקצועיות, לימוד ושיפור תמידיים וחברות.</p></div>
                            <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1" }}>במידה ואתם מחפשים לגדול ולהתפתח, להיות חלק מחברה דינמית וחדשנית ומתחברים לערכי החברה – אתם מוזמנים לפנות אלינו.</p></div>
                        </div>
                        <div className="jobs-btn">
                        </div>
                    </div>
                    <div className="career-photos">
                        <img className="large-photo" src={interview} />
                        <img className="small-photo" src={smiling} />
                    </div >
                </div>
                <div > 
                <div className="job-offers container" >
                    <div className="job-title-wrap">
                        <h3 className="job-title">{t('latest_jobs')}.</h3>
                    </div>
                    <div className="articles-row">
                        <MediaControlCard path = "/job-offer/:102/">
                            <h2 className="card-title">נציג/ת תפעול ושירות לקוחות</h2>
                            <div className="card-text">מתן שירות ומענה ללקוחות עסקיים במגוון נושאים פיננסיים, שיחות נכנסות ויוצאות במטרה להעמיק את הקשרים עם הלקוח, תמיכה וטיפול בתהליכים תפעוליים.</div>
                            <div className="job-details-wrap">
                                <div className="job-details">מספר משרה: 102</div>
                                <div className="job-details">מיקום המשרה: תל אביב</div>
                                <div className="job-details">סוג המשרה: מלאה</div>
                                <div className="job-details">תאריך אחרון להגשת מועמדות: 01/12/2021</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard path = "/job-offer/:201/">
                            <h2 className="card-title">פקיד/ת הנהלת חשבונות</h2>
                            <div className="card-text">תפקיד כולל קליטת פקודות יומן ושקים כרטיסים, התאמות, תיוקים, קליטת חשבוניות, תשלומי חשבוניות לספקים, הכנת הוראות תשלום.</div>
                            <div className="job-details-wrap">
                                <div className="job-details">מספר משרה: 201</div>
                                <div className="job-details">מיקום המשרה: תל אביב</div>
                                <div className="job-details">סוג המשרה: מלאה</div>
                                <div className="job-details">תאריך אחרון להגשת מועמדות: 01/11/2021</div>
                            </div>
                        </MediaControlCard>
                        <MediaControlCard path = "/job-offer/:301/">
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
                <div  style={cardStyle}>
                    <MediaControlCard path='/job-offer/:101/'>
                        <h2 className="card-title">נציגי/ות שירות ומכירות</h2>
                        <div className="card-text">לתפקיד הכולל מתן מענה טלפוני ללקוחות החברה בנושאים מגוונים בעולמות הפיננסיים ומכירת פתרונות פיננסיים.
                        </div>
                        <div className="job-details-wrap">
                            <div className="job-details">מספר משרה: 101</div>
                            <div className="job-details">מיקום המשרה: תל אביב</div>
                            <div className="job-details">סוג המשרה: מלאה</div>
                            <div className="job-details">תאריך אחרון להגשת מועמדות: 01/11/2021</div>
                        </div>
                    </MediaControlCard>
                </div></div>
            </div >
        </div>
    )
}

export default Career