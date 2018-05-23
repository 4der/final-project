import React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutHost">
          <div className="picOfHost">
            <img className="imageBar" src={require('../images/spaceCat.gif')}alt="picture of host" />
          </div>
          <p>Hosted by:</p>
          <p className="nameBling"> Erika Adamsson </p>
          <div className="email">
            <a href="mailto:adamsson.erika@gmail.com?body= Hello friend!">Say hello! <img className="hello" src={require('../images/wave.png')}alt="Hello!" /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
