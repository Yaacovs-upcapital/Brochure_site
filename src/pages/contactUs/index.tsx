import React from 'react'
import ContactForm from '../../components/contactForm'
import './contactUs.css'

const ContactUs = () => {
  return (
    <div >
      <div className="bg-img" style={{ zIndex: -1, textAlign: "center" }}>

      </div>
      <div className='contact-page-wrapper'> 
        <div style={{ marginTop: -220, marginBottom: 50 }} className="contact-page"><ContactForm /></div>
      </div>
    </div>
  )
}

export default ContactUs