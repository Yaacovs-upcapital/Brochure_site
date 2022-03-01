import cogwheel from "../../assets/images/cogwheel.jpg"
import laptop from "../../assets/images/laptop.jpg"
import Deloitte from "../../assets/images/deloitte-digital.png";
import Erech from "../../assets/images/erechlogo.png";
import Oracle from "../../assets/images/oracle.png";
import BDO from "../../assets/images/bdo.png";
import Obelisk from "../../assets/images/obelisk.png";
import PrimeSec from "../../assets/images/prime-sec.png";
import PWC from "../../assets/images/pwc.png";
import Tadmor from "../../assets/images/tadmor.png";
import mariano from '../../assets/images/mariano.png';
import yaron from '../../assets/images/yaron.jpg';
import yoni  from '../../assets/images/yoni.jpeg'
import './aboutUs.css';
import useWindowSize from "../../components/windowSize";
import Slider from 'infinite-react-carousel';

const partners = [Obelisk, Oracle, PrimeSec, Erech, BDO, Deloitte, Tadmor, PWC]
const settings1 = {
	autoplay: true,
	autoplaySpeed: 5000,
	slidesPerRow: 4,
	dots: true,
	arrows: false, 
};

const About = () => {
	return (
		<div>

			<div className="bg-img">
				<h1>מי אנחנו</h1>
			</div>
			<div className="career-content container">
				<div className="career-photos">
					<img className="large-photo" src={cogwheel} alt="cogwheel" />
					<img className="small-photo" src={laptop} alt="laptop" /> 
				</div >
				<div className="text-container" >
					<div className="text-wrapper">
						<div className="career-second-title"><h3 style={{ lineHeight: "1" }}>.Up Capital</h3></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}> חברת פינ-טק אשר פיתחה טכנולוגיה ייחודית ושירות דיגיטלי חדשני להנגשת אשראי ומימון לעסקים קטנים ובינוניים (MSME) בצורה פשוטה, מהירה והוגנת. הפיתוח הייחודי של החברה שם קץ לכשל שוק ידוע ולראשונה מאפשר לעסקים נגישות להון החוזר הלא מנוצל שלהם אשר עד כה היה "תקוע" ב"שוטף פלוס".</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>החברה, שהוקמה על-ידי יזמים מנוסים וצוות מומחים בתחומי הטכנולוגיה, האשראי ושוק ההון, שמה לה למטרה לייצר מציאות כלכלית חדשה לעסקים ולחזק את כלכלת ישראל וזאת מתוך הבנה כי של העסקים הקטנים והבינוניים מהווים מנוע צמיחה משמעותי בכלכלה הישראלית ויכולתם לגדול ולהתפתח תשליך על המשק כולו.</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>תהליך הפיכת ההון הלא מנוצל לזמין מתבצע בלחיצת כפתור אחת, ללא ערבויות וביטחונות אישיים כפי שמקובל בשוק הפיננסי המסורתי ויוצר מצב של WIN-WIN בעבור כל הצדדים.</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>בנוסף, השילוב של הטכנולוגיה הייחודית לצד הידע וההבנה העמוקה של צוות המומחים בתחום, מאפשר לתפור לכל לקוח "חליפה אישית" המותאמת למידותיו וצרכיו.</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}>Up Capital פועלת יחד עם הפירמות המובילות ובשיתוף פעולה עם מוסדות הפיננסים המרכזיים בישראל ובעולם בתחום ראיית החשבון, המשפט והדיגיטל.</p></div>
						<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction: "rtl" }}><strong>ביחד, ניצור מציאות כלכלית חדשה לעסקים ולכלכלת ישראל.</strong></p></div>
					</div>

				</div>
			</div>
			<div>
				<div ><h4 className="team-title">הצוות</h4></div>
				<div className="team-container container">
					<div className="team-member">
						<div className="img-wrap">
							<img src={mariano} alt="mariano" className='member-image' />
						</div>
						<div>
							<h4 className='member-title'>מריאנו פטסינסקי - מייסד ומנכ"ל</h4>
						</div>
						<p className='member-description container'>
							נחשב למומחה בעל שם בתחום מימון שרשראות האספקה והון חוזר. מייסד חברת Peninsula, העוסקת במתן פתרונות אשראי לחברות קטנות ובינוניות בישראל ומייסד eLoan, חברת ההלוואות החברתיות הראשונה בישראל אשר נמכרה לקבוצת מיטב-דש. בעבר מילא שורת תפקידים בכירים בחברות גדולות ביניהם: ראש מחלקת אשראי צרכני בלאומי קארד (כיום מקס), סמנכ"ל אשראי וניהול סיכונים בכולמוביל, מנהל אשראי ומימון לקוחות בתעש מערכות, ראש חטיבת הפקטורינג ב- UBankועוד. מריאנו מביא עימו ניסיון של למעלה מ -20 שנים בתחום מימון שרשרת אספקה, אשראי ופקטורינג. למריאנו תואר ראשון בכלכלה מטעם אוניברסיטת תל-אביב ותואר שני במנהל עסקים מטעם הטכניון.
						</p>
					</div>
					<div className="team-member"> 
						<div className="img-wrap">
							<img src={yaron} alt="yaron" className='member-image' />
						</div>
						<div>
							<h4 className='member-title'>ירון כהן - סמנכ"ל כספים</h4>
						</div>
						<p className='member-description container'>
						רו"ח ירון כהן מביא ניסיון רב של למעלה מ-20 שנה בתחומי עיסוק וניהול שונים הכוללים ביקורת פיננסית (סומך חייקין, KPMG), ניהול סיכונים, ביצוע ניתוחי כדאיות ורווחיות, בניית תחזיות עסקיות, השקעות נדל"ן בארה"ב, יזמות והקמת וניהול חברות סטארט-אפ. לירון תואר ראשון בכלכלה וחשבונאות ותואר שני במנהל עסקים עם התמחות במימון מאוניברסיטת תל-אביב.						</p>
					</div>
			
					<div className="team-member">
						<div className="img-wrap">
							<img src={yoni} alt="yoni " className='member-image' />
						</div>
						<div>
							<h4 className='member-title '>יוני שמלה - מפתח המערכת</h4>
						</div>
						<p className='member-description container'>
						מהנדס, בעל ניסיון רב בפיתוח מערכות Front end ו- Back end , ניהול שרתים, פיתוח ממשקים, אבטחת מידע ועוד. ליוני תואר ראשון בהנדסת מכונות מאוניברסיטת אריאל.						</p>
					</div>
				</div>
			</div>
			<div className="partners container">
				<h2 className="partners-title">.השותפים לדרך</h2>
				{useWindowSize() <= 767 ?
                    <div className="carousel-wrapper">
                        <Slider {...settings1}>
                            {partners.map(item => (<div className="carousel-item-dv" ><img  className="image-carousel" src={`${item}`}/></div>))}

                        </Slider>
                    </div>
                    :
                    <div className="images-row">
                        {partners.map(item => (<div className="image" style={{ backgroundImage: `url(${item})` }}></div>))}
                    </div>}
			</div>
		</div>
	)
}

export default About

