import React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutHost">
          <p>Text about your hosts, organized by (and round image) email address and name!</p>
          <div className="picOfHost">
            <img className="imageBar" src={require('../images/hero.jpg')}alt="feeling" />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
