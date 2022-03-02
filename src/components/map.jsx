import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React from 'react';

import { markers } from '../markers';
import InfoModal from './infoModal';

export class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      markerInfo: {
        id:1,
      name:'',
      photo:'../public/interier/first.jpg',
      sidephotoes: [
        '../public/interier/second.jpg',
        '../public/interier/third.jpg',
        '../public/interier/fourth.jpg',
        '../public/interier/fifth.jpg',
        '../public/interier/sixth.jpg',
        '../public/interier/seventh.jpg',
        '../public/interier/eighth.jpg',
        '../public/interier/ninth.jpg',
        '../public/interier/tenth.jpg',
      ],
      description:'',
      price:'',
      coords:{
        lat:48.494722,
        lng:35.045639,
      },
      }
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  mapClicked(mapProps, map, clickEvent) {
    let lat = clickEvent.latLng.lat()
    let lng = clickEvent.latLng.lng()
      
  }

  markerClicked(id) {
    this.showModal()
    this.setState({ markerInfo: markers.filter(marker => marker.id === id) });
  }

  render() {
    const mapStyles = {
      width: "70%",
      height: "100vh",
    };
    return (
      <>
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
              onClick={() => this.markerClicked(marker.id)}
              />
            ))}
        </Map>
        <InfoModal handleClose={this.hideModal} show={this.state.show} markerInfo={this.state.markerInfo} />
      </>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBiRoMQJ7KzaoSC9eggZSG4ZlNZKL3cunQ'
  })(Maps);