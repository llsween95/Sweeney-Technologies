import React, { Component } from 'react'
import Header from '../Components/Header'
import Masthead from '../Components/Masthead'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'


export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Masthead />
        <Contact />
        <Footer />
      </>
    )
  }
}
