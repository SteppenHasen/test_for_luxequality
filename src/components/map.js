import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React from 'react';

export class Maps extends React.Component {
    mapClicked(mapProps, map, clickEvent) {
        let lat = clickEvent.latLng.lat()
        let lng = clickEvent.latLng.lng()
      }

    render() {
      const mapStyles = {
        width: "70%",
        height: "100vh",
      };
      return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 48.494722, lng: 35.045639 }}
          onClick={this.mapClicked}
        />
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBiRoMQJ7KzaoSC9eggZSG4ZlNZKL3cunQ'
  })(Maps);