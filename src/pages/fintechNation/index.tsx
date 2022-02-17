import { textAlign } from "@mui/system";
import React from "react";
import MediaControlCard from "../../components/card";
import "./fintechNation.css";
import { blogs } from "../../data/blog";
const FintechNation = () => {
  return (
    <div>
      <div className="bg-img">
        <h2>{blogs[0].title}</h2>
      </div>
      <div style={{ direction: "rtl", maxWidth: 1000, textAlign: "justify", margin: 'auto' }}>
        {blogs[0].content.length &&
          blogs[0].content.map((blog, i) => (
            <div key={i} className="ar-text">
              {blog}
            </div>
          ))}
      </div>
      <div className="articles-wrap container">
        <MediaControlCard>
          <h2 className="card-title">חשיבות ההון החוזר לעסק חדש וקיים</h2>
          <div className="card-text">
            בכדי לנהל עסק מצליח, לצד חזון ועבודה קשה, צריך להכיר את המספרים
            והמדדים אשר מרכיבים אותו מקרוב.
          </div>
        </MediaControlCard>
        <MediaControlCard>
          <h2 className="card-title">דווקא עכשיו רוורס פקטורינג</h2>
          <div className="card-text">
            בשעה שעומדים בפני התקשרות מול גופים גדולים, הספקים נדרשים לקחת
            בחשבון מראש פרמטרים רבים כדוגמת: העלות המימונית שלו.
          </div>
        </MediaControlCard>
      </div>
    </div>
  );
};

export default FintechNation;
