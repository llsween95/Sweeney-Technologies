import React, { Component } from 'react'
import '../App.css'


export default class Footer extends Component {
  render() {
    return (
      <>
        <div class="copyright py-4 text-center text-white black-background">
          <div class="container">
            <small>
              Copyright &copy; Sweeney Technologies
                    <script>
                document.write(new Date().getFullYear());
                    </script>
            </small>
          </div>
        </div>
      </>
    )
  }
}