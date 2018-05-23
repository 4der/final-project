import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="heroImage">
          <div className="contentWrap">
            <div>
              <h1 className="heroTextBig">Welcome!</h1>
            </div>
            <div>
              <a href="#f1">
                <button className="rsvpButton">RSVP!</button>
              </a>
            </div>
            <div>
              <h4 className="heroTextSmall">Vidängsvägen 49, kl 19:00</h4>
            </div>
          </div>
          {/* <img className="hero" src={require('../images/stillimg.png')} alt="heroImage" /> */}
          <video autoPlay loop infinite="true">
            <source className="video" src={require("../images/herovid.ogv")} type="video/ogv" alt="video" />
            <source className="video" src={require("../images/herovid.mp4")} type="video/mp4" alt="video" />
            <source className="video" src={require("../images/Shimmering_Particles.webm")} type="video/webm" alt="video" />
          </video>
        </div>
      </div>
    )
  }
}

export default Hero
