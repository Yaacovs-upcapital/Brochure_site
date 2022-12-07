import egg from "../../assets/images/egg.png";
import dunBradstreet from "../../assets/images/dun-bradstreet.png";
import iso from "../../assets/images/iso.png";
import tele from "../../assets/images/TelePhone.png";
import env from "../../assets/images/env.png";
import addr from "../../assets/images/addr.png";
import { useTranslation } from "react-i18next";
import { i18n } from "../../translations/i18n";
import useWindowSize from "../windowSize";
import "./footer.css"

const Footer = () => {
  const { t } = useTranslation()
  const lang = i18n.language
  return (
    <div>
      <div className="contact">
       
      <div className="container" style={{ display: "flex",justifyContent:"right" }}><p className="form-title" style={{fontSize:"35pt"}}>{t("contact")}</p><p className="form-title" style={{ color: "red" }}>.</p>
            </div>
<div className="row p-5" >
<div className="col-lg-5 col-md-12 col-sm-12  mt-3 mb-3">
         <div >

            <p className="second-title">{t("contact_form")}:</p>
          </div>

          <div style={{ width: "100%", marginLeft: "1rem" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "1rem 1rem 4rem 1rem" }}>

                <form style={{}}>
                  <div style={{ display: "flex" }}>
                    <div className="text-input"><input type="text" id="fname" name="fname" placeholder={t("full_name")} required /><div className="input-line"></div></div>
                    <div className="text-input"><input type="text" id="lname" name="lname" placeholder={t('phone')} required /><div className="input-line"></div></div>
                  </div>
                  <div style={{ display: "flex" }}>

                    <div className="text-input"><input type="text" id="email" name="email" placeholder={t("email")} required /><div className="input-line"></div></div>
                    <div className="text-input"><input type="text" id="company" name="company" placeholder={t("company")} /><div className="input-line"></div></div>
                  </div>

                  <div className="text-input"><input type="text" id="message" name="message" placeholder={t("message")} /><div className="input-line"></div></div>
                  <input type="submit"  value={"שליחה"} />
            
                </form>
              </div>
            </div> 
</div>

<div className="col-lg-4 col-md-12 col-sm-12  mt-3 mb-3">
        <div className="vl" >

        <div>
          <h2 className="form-title mb-4" >{t("contact_info")}</h2>
          <div className="detail-wrap" >
            {/* <div className="detail-name">{t("email")}</div> */}
            <div className="contact-detail"><img src={env} style={{height:"30px", width:"30px"}}/>info@upcapital.io </div>
          </div>
          <div className="detail-wrap">
            {/* <div className="detail-name">{t("phone")}</div> */}
            <div className="contact-detail"><img src={tele} style={{height:"30px", width:"30px"}}/> 073-7801153</div>
          </div>
          <div className="detail-wrap">
            {/* <div className="detail-name">{t("address")}</div> */}
            <div className="contact-detail"><img src={addr} style={{height:"30px", width:"30px"}}/> {t("address_text")}</div>
          </div>




        </div>
        </div>
</div>

<div className="col-lg-3 col-md-12 col-sm-12 mt-3 mb-3">
<div style={{color:"white"}}>
            <div  className="form-title mb-4">{t("additional_info")}</div>
            <div className="contact-detail">{t("terms")}</div>
            <div  className="contact-detail">{t("policy")}</div>
            <div  className="contact-detail">{t("accessibilty")}</div>
            <div>
            <div><img style={{marginTop:"10px", width:"90px", height:"90px"}} src={dunBradstreet}  /></div>
              {/* <div ><img style={{marginTop:"10px", width:"192px", height:"100%", position:"relative",left:"56px"}} src={iso}  /></div> */}
           
            </div>
          </div>
</div>


</div>




          <div className="contact-parent" >
            



          </div>

      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12" style={{textAlign:"center"}}>
        <div>{t("rights")}</div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12" style={{textAlign:"center"}}>
        <div><img src={egg} width="20%" height="20%" /></div>
</div>
        
      
        
      </div>
    </div>
  );
};

export default Footer;