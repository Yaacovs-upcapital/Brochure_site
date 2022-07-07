import './solution.css'
import handshake from '../../assets/images/handshake.jpg'
import calc from "../../assets/images/calc.jpg"
import phone from "../../assets/images/phone.png"
import { useTranslation } from 'react-i18next'

const Solution = () => {
    const { t } = useTranslation();

    return (
        <div>

            <div className="bg-img">
                <h1 className='solution-title'>{t("solution")}</h1><h1 style={{ color: "red" }}>.</h1>
            </div>
            <div className="career-content">

                <div className="text-container">
                    <div className="text-wrapper">
                        <div className="career-second-title"><h3 style={{ lineHeight: "1" }}>רקע.</h3></div>
                        <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify" }}> בכל רגע נתון ברחבי העולם, קיימים כ-54 טריליון דולרים ב"שוטף פלוס" כלומר, כסף שנמצא במצב ביניים בין ספקים ללקוחות. רק בישראל הסכום המוערך עומד על למעלה מ-50 מיליארד דולרים.</p></div>
                        <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify" }}><strong>מדובר בהון חוזר, לא נגיש, לא נזיל ולא מנוצל.</strong></p></div>
                        <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify" }}>נגישות להון הזה תאפשר לייצר מציאות כלכלית חדשה לעסקים, בעיקר קטנים ובינוניים, ותאפשר להם לגדול ולהתפתח, והרי צמיחה של העסקים הקטנים והבינונים אשר נחשבים ל"קטר" של הכלכלה, בכוחה לייצר מציאות כלכלית חדשה למדינה כולה.</p></div>
                        <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify" }}>כיום הסיבה המרכזית לחוסר הנגישות נעוצה בכך ששוק האשראי לעסקים עדיין פועל באופן מיושן, עם מעט טכנולוגיה והרבה בירוקרטיה.</p></div>
                    </div>

                </div>
                <div className="career-photos">
                    <img className="large-photo" src={handshake} />
                    <img className="small-photo" src={calc} />
                </div >
            </div>
            <div className="career-content" style={{ justifyContent: "space-evenly" }}>
                <div className="photos" >
                    <img className="photo" src={phone} />
                </div >
                <div className="text-container">
                    <div className="career-second-title"><h3 style={{ lineHeight: "1", textAlign: "justify" }}>איך אנחנו עושים זאת.</h3></div>
                    <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify" }}>באמצעות טכנולוגיה ייחודית שפיתחנו כל חשבונית מאושרת הופכת למזומן בלחיצת כפתור, ללא חיכוך, בתהליך קל ליישום והפעלה. כך אנו מקצרים את זמן ההמתנה של הכסף השוכב ב"שוטף פלוס" ומייצרים דרכי מימון חדשות המאפשרות מימון הון חוזר.</p></div>
                    <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify" }}>אנו פועלים אל מול הגופים הגדולים במשק ומאפשרים לספקים של אותם גופים להתחבר לאפליקציה של Up Capital, לצפות בתשלומים העתידים שלהם ובלחיצת כפתור להפוך אותם להון זמין לשימוש.</p></div>
                    <div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify" }}>העסקים יכולים לבחור אילו מהתשלומים ברצונם להפוך לנזילים, הספקים מציעים את הנחת המזומן, הכל באופן שקוף, נגיש ופשוט בעבור שני הצדדים.</p></div>

                </div>

            </div>
        </div>
    )
}

export default Solution