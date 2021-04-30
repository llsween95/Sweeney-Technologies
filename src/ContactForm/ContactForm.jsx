import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css'



export default function ContactForm() {

  let sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kq8jy79', 'template_yf80yji', e.target, 'user_B8ChsfyW9h2ZAcj7Nnc2a')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    alert('Your message has been sent!')
  }


  return (
    <>
      <section className="contact" >
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            rows="5"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button type="sumbit">Submit</button>
        </form>
        <p className="number">Call <strong>Luke</strong> at 914-588-5258.</p>
      </section>
    </>
  )
}
