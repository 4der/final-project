import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="heroImage">
        <img className="heroImage" src={require('../images/hero.jpg')}alt="dinks" /> */}
        <div class="heroImage">
          <video autoPlay loop>
            <source className="video1280" src={require('../images/herovid.mp4')}alt="movie" />
          </video>

          <h1 className="heroTextBig">Welcome!</h1>
          <a href="#f1">
            <button className="rsvpButton">RSVP!</button>
          </a>
          <h4 className="heroTextSmall">Time & place</h4>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default Hero
