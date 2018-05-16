import React from "react"
import "./hero.css"

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="heroImage">
          <img className="heroImage" src={require('../images/hero.jpg')}alt="dinks" />
          <h1 className="heroTextBig">Welcome!</h1>
          <a href="#f1">
            <button className="rsvpButton">RSVP!</button>
          </a>
          <h4 className="heroTextSmall">Time & place</h4>
        </div>
      </div>
    )
  }
}

export default Hero
