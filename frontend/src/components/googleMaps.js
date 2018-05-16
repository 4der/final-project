import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import "./googleMaps.css"
import Pin from "./pin"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.339659,
      lng: 17.977606
    },
    zoom: 11
  };

  render() {
    return (
      <div className="mapsText">
        <p>Text about all you need to know, time, place map to the right etc!</p>
        <div className="googleMap" style={{ height: '40vh', width: '20%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Pin lat={59.339659} lng={17.977606} text={"Party here! ↯"} /* Kreyser Avrora ⬇️ */ />
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      </div>
        )
  }
}

export default SimpleMap
