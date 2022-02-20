import { Card,  } from "@mui/material";
import "./contactForm.css"
const ContactForm = () => {

  return (
    <div>
      <div >
        <h2 className="form-title"
        // style={{ color:" #fff", fontSize: "42px", fontWeight: "700"}}
        >.צור קשר</h2>
        <p className="second-title">:לפרטים נוספים השאירו פרטיכם בטופס</p>
      </div>
      <div style={{ width:"1000px" }} className='form-content'>
        <Card style={{ borderRadius: "20px", padding: "50px 30px"  }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "60%", padding: "0 30px" }}>
              <form style={{direction:"rtl", color:"blue"}}>
                <div className="text-input"><input type="text" id="fname" name="fname" placeholder="שם מלא" required/></div>
                 <div className="text-input"><input type="text" id="lname" name="lname" placeholder="טלפון"  required/></div>
                 <div className="text-input"><input type="text" id="lname" name="lname" placeholder='דוא"ל'  required/></div>
                 <div className="text-input"><input type="text" id="lname" name="lname" placeholder='שם החברה' /></div>
                 <div className="text-input"><textarea name="" id=""  placeholder="הודעה"></textarea></div>
                 <input type="submit" value={"שליחה"}/>
              </form>
            </div>
            <div className="vl" >
              <h2 className="detail-title" >פרטי התקשרות</h2>
              <div className="detail-wrap">
                <div className="detail-name">דוא״ל</div>
                <div className="contact-detail">info@upcapital.io</div>
              </div>
              <div className="detail-wrap">
                <div className="detail-name">טלפון</div>
                <div className="contact-detail">073-7801153</div>
              </div>
              <div className="detail-wrap">
                <div className="detail-name">כתובת</div>
                <div className="contact-detail">שדרות רוטשילד 45, תל אביב-יפו</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;