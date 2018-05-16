import React from "react"
import "./googleMaps.css"

class GoogleMaps extends React.Component {
  render() {
    return (
      <div>
        <div className="mapsText">
          <p>Text about all you need to know, time, place map to the right etc!</p>
          <div className="mapImage">
            <img className="imageBar" src={require('../images/hero.jpg')}alt="feeling" />
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleMaps

// https://maps.googleapis.com/maps/api/js
