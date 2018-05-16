import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="heroImage">
          <div className="contentWrap">
            <h1 className="heroTextBig">Welcome!</h1>
            <a href="#f1">
              <button className="rsvpButton">RSVP!</button>
            </a>
            <h4 className="heroTextSmall">Vidängsvägen 49, kl 19:00</h4>
          </div>
          <video autoPlay loop infinite>
            <source id="video" src={require("../images/herovid.mp4")} type="video/mp4" alt="video" />
          </video>
        </div>
      </div>
    )
  }
}

export default Hero
