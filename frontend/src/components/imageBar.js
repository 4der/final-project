import React from "react"
import "./imageBar.css"

class ImageBar extends React.Component {
  render() {
    return (
      <div>
        <div className="imageBar">
          <img className="imageBar" src={require('../images/hero.jpg')}alt="feeling" />
          <img className="imageBar" src={require('../images/4.jpg')}alt="feeling" />
          <img className="imageBar2" src={require('../images/hero.jpg')}alt="feeling" />
          <img className="imageBar2" src={require('../images/4.jpg')}alt="feeling" />
          <img className="imageBar2" src={require('../images/hero.jpg')}alt="feeling" />
        </div>
      </div>
    )
  }
}

export default ImageBar
