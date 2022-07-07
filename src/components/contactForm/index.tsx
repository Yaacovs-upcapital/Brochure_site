import { Card, } from "@mui/material";
import { useTranslation } from "react-i18next";
import { i18n } from "../../translations/i18n";
import useWindowSize from "../windowSize";
import "./contactForm.css"

const ContactForm = () => {
  const { t } = useTranslation()
  const lang= i18n.language
  return (
    <div>
      <div >
        <h2 className="form-title"
        // style={{ color:" #fff", fontSize: "42px", fontWeight: "700"}}
        >.{t("contact")}</h2>
        <p className="second-title">{t("contact_form")}:</p>
      </div>
      <div className='form-content'>
        <Card style={{ borderRadius: "20px", padding: "50px 30px" }}>
          <div style={{ display: "flex", flexDirection: useWindowSize() <= 767 ? "column-reverse" : "row" }}>

            <div className="vl" style={{ width: useWindowSize() <= 767 ? "100% " : "40%", padding: "0 30px", borderLeft:lang!="en"?"1px solid":'', borderRight:lang=="en"?"1px solid":''}} >
              <h2 className="detail-title" >{t("contact_info")}</h2>
              <div className="detail-wrap">
                <div className="detail-name">{t("email")}</div>
                <div className="contact-detail">info@upcapital.io</div>
              </div>
              <div className="detail-wrap">
                <div className="detail-name">{t("phone")}</div>
                <div className="contact-detail">073-7801153</div>
              </div>
              <div className="detail-wrap">
                <div className="detail-name">{t("address")}</div>
                <div className="contact-detail">{t("address_text")}</div>
              </div>
            </div>
            <div style={{ width: useWindowSize() <= 767 ? "100% " : "60%", padding: "0 30px" }}>
              <form style={{ color: "blue" }}>
                <div className="text-input"><input type="text" id="fname" name="fname" placeholder={t("full_name")} required /></div>
                <div className="text-input"><input type="text" id="lname" name="lname" placeholder={t('phone')} required /></div>
                <div className="text-input"><input type="text" id="lname" name="lname" placeholder={t("email")} required /></div>
                <div className="text-input"><input type="text" id="lname" name="lname" placeholder={t("name")} /></div>
                <div className="text-input"><textarea name="" id="" placeholder={t("message")}></textarea></div>
                <input type="submit" value={t("send")} />
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;