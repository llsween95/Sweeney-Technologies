import React, { Component } from 'react'
import './ContactForm.css'


export default class ContactForm extends Component {
  render() {
    return (
      <>
        <section className="contact" >
          <form method="POST" className="contact-form">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <textarea rows="5" placeholder="Message"></textarea>
            <button type="sumbit">Submit</button>
          </form>
          <p className="number">Call <strong>Luke</strong> at 914-588-5258.</p>
        </section>
      </>
    )
  }
}
