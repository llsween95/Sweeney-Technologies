import React, { Component } from 'react'
import '../App.css'


export default class Header extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg black-background fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Sweeney</a>
          </div>
        </nav>
      </>
    )
  }
}