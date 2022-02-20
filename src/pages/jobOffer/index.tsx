import { Label } from '@mui/icons-material'
import React from 'react'
import "./jobOffer.css"

const JobOffer = () => {
    return (
        <div style={{ direction: "rtl" }}>
            <div className="bg-img">
                <h2>
                    פקיד/ת הנהלת חשבונות
                </h2>
            </div>
            <div className='job-container'>
                <div className='details-wrap'>
                    <div className='details'>201 :מספר משרה</div>
                    <div className='details'>מיקום: תל אביב</div>
                    <div className='details'>סוג משרה: מלאה</div>
                    <div className='details'>תאריך אחרון להגשה: 01/11/21</div>
                </div>
                <div className='job-desc-wrap'>
                    <h3 className='desc-title'>תיאור תפקיד</h3>
                    <div>דרוש /ה פקיד /ת למחלקת הנהלת חשבונות, הגדרת התפקיד כוללת: קליטת פקודות יומן ושקים כרטיסים, התאמות, תיוקים, קליטת חשבוניות, תשלומי חשבוניות לספקים, הכנת הוראות תשלום.</div>
                </div>
                <div>
                    <h3 className='desc-title'>דרישות התפקיד
                    </h3>
                    <ul>
                        <li>ניסיון קודם – חובה.</li>
                        <li>אקסל – חובה.</li>
                        <li>יכולת עבודה בסביבה ממוחשבת – חובה.</li>
                        <li>ידע בסיסי בהנהלת חשבונות – חובה.</li>
                        <li>המשרה מיועדת לנשים וגברים כאחד.</li>
                    </ul>
                </div>
            </div>
            <div className='job-app'>
                <h3 className='job-app-title'>טופס הגשת מועמדות</h3>
                <div className='job-form'>
                    <form style={{ direction: "rtl", color: "blue" }}>
                        <div className="detail-input"><input type="text" id="fname" name="fname" placeholder="שם מלא" required /></div>
                        <div className="detail-input"><input type="text" id="phone" name="phone" placeholder="טלפון" required /></div>
                        <div className="detail-input"><input type="email" id="email" name="email" placeholder='דוא"ל' required /></div>
                        <div className="detail-input"><div className='upload' ><div className='upload-title'>העלאת קורות חיים</div><input type="file" id="myFile" name="filename" required/></div></div>
                        <div className="detail-input"><textarea name="textarea" id="" placeholder="הערות נוספות"></textarea></div>
                        <input type="submit" value={"שליחה"} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobOffer