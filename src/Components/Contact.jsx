import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import '../App.css'



export default class Contact extends Component {

  render() {


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
      <section class="page-section  white-background" id="contact">
        <div class="container">
          <h2 class="page-section-heading text-center  mb-0">Contact Me</h2>
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={sendEmail}>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Name</label>
                    <input class="form-control" name="name" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Email Address</label>
                    <input class="form-control" name="email" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="control-group">
                  <div class="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Message</label>
                    <textarea class="form-control" id="message" rows="5" placeholder="Message" name="message" required="required" data-validation-required-message="Please enter a message."></textarea>
                  </div>
                </div>
                <br />
                <div id="success"></div>
                <div class="form-group text-center"><button class="btn black-background btn-xl" id="sendMessageButton" type="submit">Send</button></div>
              </form>
            </div>
          </div>
        </div>
        <div className="phone-number">
          <p>Call <strong>Luke</strong> at 914-588-5258.</p>
        </div>
      </section>
    )
  }
}
