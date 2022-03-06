import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React from 'react';

import { markers } from '../markers';
import InfoModal from './infoModal';
import AddMarkerModal from './addNewMarkerInfo';

export class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showForm:false,
      markerInfo: {
        id:10,
        name:'Оптика миссис Люмен',
        photo:'../../public/interier/tenth.jpg',
        sidephotoes: [
          '../../public/interier/second.jpg',
          '../../public/interier/third.jpg',
          '../../public/interier/fourth.jpg',
          '../../public/interier/fifth.jpg',
          '../../public/interier/sixth.jpg',
          '../../public/interier/seventh.jpg',
          '../../public/interier/eighth.jpg',
          '../../public/interier/ninth.jpg',
          '../../public/interier/first.jpg',
        ],
        description:'Ваш взгляд встретится с глазами ястреба и различит призрака при расстоянии двух световых лет.',
        adress: 'набережная Сливочной реки, улица Бравой надежд, дом № 0 перед упавшим булыжник с Зеркальной горы.',
        price:'150',
        coords:{
          lat:48.474722,
          lng:34.985639,
        },
      }
    };
    this.showModal = this.showModal.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  showAddForm = () => {
    this.setState({ showForm: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    this.setState({ showForm: false })
  };

  onClickHandler(props, map, clickEvent) {
    this.showAddForm()
    console.log(clickEvent)
  }

  markerClicked(id) {
    this.showModal()
    let newInfo = markers.filter(marker => marker.id === id )
    Object.keys(newInfo).forEach(key => {
      this.setState({ markerInfo: newInfo[key] });
    })
    console.log(this.state.markerInfo)
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
          onClick={this.onClickHandler}
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
        <AddMarkerModal handleClose={this.hideModal} show={this.state.showForm} markerCoords={this.mapClicked} />
      </>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBiRoMQJ7KzaoSC9eggZSG4ZlNZKL3cunQ'
  })(Maps);