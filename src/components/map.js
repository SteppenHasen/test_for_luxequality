import { Map, GoogleApiWrapper } from 'google-maps-react'
import React from 'react';

export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "80%",
        height: "80%",
      };
      return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 48.494722, lng: 35.045639 }}
        />
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBiRoMQJ7KzaoSC9eggZSG4ZlNZKL3cunQ'
  })(Maps);