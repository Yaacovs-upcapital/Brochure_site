import React from 'react'
import ContactForm from '../../components/contactForm'
import './contactUs.css'

const ContactUs = () => {
  return (
    <div >
      <div className="bg-img" style={{ zIndex: -1, textAlign: "center" }}>

      </div>

      <div style={{ marginTop: -280 }} className="contact-page"><ContactForm /></div>
    </div>
  )
}

export default ContactUs