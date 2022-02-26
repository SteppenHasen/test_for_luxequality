import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React from 'react';

import { markers } from '../markers';

export class Maps extends React.Component {
    mapClicked(mapProps, map, clickEvent) {
        let lat = clickEvent.latLng.lat()
        let lng = clickEvent.latLng.lng()
    }

    markerClicked() {
      
    }

    render() {
      const mapStyles = {
        width: "70%",
        height: "100vh",
      };
      return (
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: 48.494722, lng: 35.045639 }}
            onClick={this.mapClicked}
          >
            {markers.map(marker => (
               <Marker 
               position ={{lat: marker.coords.lat, lng: marker.coords.lng}} 
               key = {marker.id} 
               onClick={this.markerClicked}
               />
              ))}
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBiRoMQJ7KzaoSC9eggZSG4ZlNZKL3cunQ'
  })(Maps);