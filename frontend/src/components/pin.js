import React from "react"
import "./pin.css"

class Pin extends React.Component {
  render() {
    return (
      <div>
        <div className="pin">
          <p className="pinParagraph">{this.props.text}</p>
        </div>

      </div>
    )
  }
}

export default Pin
