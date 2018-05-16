import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import "./googleMaps.css"
import Pin from "./pin"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.339509,
      lng: 17.977570
    },
    zoom: 11
  };

  render() {
    return (
      <div className="mapsText">
        <div className="mapContent">
          <p><h2>All you need to know</h2>
            Summerparty night is a relaxed After Work where you can meet all of our friends and celebrate our achievements. There will be drinks and veggie foods for all!

            <h2>Where</h2>
            Vidängsvägen 49, Bromma.
            Closest T = Alvik

            <h2>When</h2>
            19.00 Mingle!
            21.00 Drunkness!

          Seats are limited, grab yours now. Welcome! </p>
        </div>
        <div className="googleMap" style={{ height: '40vh', width: '40%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Pin lat={59.339509} lng={17.977570} text={"⇧ Party is here!"} /* Kreyser Avrora */ />
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={"Kreyser Avrora"} />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default SimpleMap
