import MediaControlCard from "../../components/card"
import workingteam from "../../assets/images/working-team.jpg";

import "./blog.css"

const Blog = () => {


    return (
        <div className="blog-container">
            <div className="bg-img">
                <h1>מאמרים</h1>
            </div>

            <div className="articles container">
                <MediaControlCard image={workingteam} path="/blog/:אומת+הפינטק/" >
                    <h2 className="card-title">אומת הפינטק: הזווית הישראלית של הטכנולוגיה הפיננסית</h2>
                    <div className="card-text">
                        באומת הסטארטפ היתה זו רק שאלה של זמן עד שהטכנולוגיה תפרוץ גם אל תוך העולם הפיננסי המסורתי. בשנים האחרונות תחום הפינטק נחשב לאחד התחומים המתפתחים ביותר ושירותים רבים של מוצרים פיננסיים בשלל תחומים כדוגמת סליקה, אמצעי תשלום, ניהול השקעות ואשראי עוברים טרנספורמציה בחסות הטכנולוגי</div>
                </MediaControlCard>
            </div>

            <div className="articles-wrap container">
                <MediaControlCard path="/blog/:העסק+שלי+והבנק/"><h3 className="card-title">העסק שלי והבנק: כלל הזהב לזוגיות מוצלחת</h3><div className="card-text">מעטים האנשים שיכולים לומר בפה מלא כי אינם חשים כל חשש בשעה שמכשיר הטלפון מצלצל ועל הצג מופיע השם של הבנקאי.</div></MediaControlCard>
                <MediaControlCard path="/blog/:חשיבות+ההון+החוזר/"><h3 className="card-title">חשיבות ההון החוזר לעסק חדש וקיים</h3><div className="card-text">בכדי לנהל עסק מצליח, לצד חזון ועבודה קשה, צריך להכיר את המספרים והמדדים אשר מרכיבים אותו מקרוב.</div></MediaControlCard>
                <MediaControlCard path="/blog/:רוורס+פקטורינג/"><h3 className="card-title">דווקא עכשיו רוורס פקטורינג</h3><div className="card-text">בשעה שעומדים בפני התקשרות מול גופים גדולים, הספקים נדרשים לקחת בחשבון מראש פרמטרים רבים כדוגמת: העלות המימונית שלו.</div></MediaControlCard>
                <MediaControlCard path="/blog/:מסע+בעקבות+הפקטורינג/"><h3 className="card-title" >מסע בעקבות הפקטורינג: מה זה ואיך הכל התחיל?</h3><div className="card-text">ההיסטוריה של מושג הפקטורינג מתחילה, כמו הרבה, דברים ברומא העתיקה בה לסוחרים היו מעין "פקידי הפצה" שניהלו עבורם את המכירה והמסירה של הסחורה.</div></MediaControlCard>
                <MediaControlCard path="/blog/:מתן+אשראי/"><h3 className="card-title">מתן אשראי – איך עושים את זה נכון?</h3><div className="card-text">הצלחתה של שיטת הפקטורינג הקלאסי המאפשרת הפיכת אשראי ללקוחות לתשלום מיידי טמונה כבר בשלב הבדיקות הראשוניות, בשאילת השאלות הנכונות ובכללי המסגרת הנקבעים מראש.</div></MediaControlCard>
            </div>
        </div>
    )
}

export default Blog
