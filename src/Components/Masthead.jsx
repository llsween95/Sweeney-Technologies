import React, { Component } from 'react'
import '../App.css'

export default class Masthead extends Component {
  render() {
    return (
      <>
        <header class="masthead white-background text-center section-height border-bottom ">
          <div class="container d-flex align-items-center flex-column">
            <h1 class="masthead-heading mb-2">Sweeney</h1>
            <p class="masthead-subheading font-weight-light mb-2">Apps. Websites. Design.</p>

            <img class="masthead-avatar mb-5" src="bootstrap/assets/img/bitmoji-standing.png" alt="..." />
          </div>
        </header>
      </>
    )
  }
}