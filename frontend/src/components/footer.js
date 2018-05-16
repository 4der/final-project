import React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutHost">
          <div className="picOfHost">
            <img className="imageBar" src={require('../images/tenor-57282185.gif')}alt="feeling" />
          </div>
          <h2>Hosted by:</h2>
          <p> Erika Adamsson </p>
          <div className="email">
            <a href="mailto:adamsson.erika@gmail.com?body= Hello friend!">adamsson.erika@gmail.com</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
