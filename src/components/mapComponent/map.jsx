import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React from 'react';

import { markers } from '../../markers';
import InfoModal from '../infoModal/infoModal';
import AddMarkerModal from '../addNewMarkerInfo/addNewMarkerInfo';

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
      },
      addingLatLng: {
        lat: 0,
        lng: 0
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
    console.log(this.state.addingLatLng)
    this.setState({ showForm: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    this.setState({ showForm: false })
  };

  setAddingLatLng = (lat, lng) => {
    this.setState({ addingLatLng: {lat: lat, lng: lng} })
  }

  onClickHandler(props, map, clickEvent) {
    this.setAddingLatLng(clickEvent.latLng.lat(), clickEvent.latLng.lng())
    this.showAddForm()
  }

  markerClicked(id) {
    this.showModal()
    let newInfo = markers.filter(marker => marker.id === id )
    Object.keys(newInfo).forEach(key => {
      this.setState({ markerInfo: newInfo[key] });
    })
  }

  render() {
    const mapStyles = {
      width: "70%",
      height: "100vh",
    };

    let addForm
    if (this.state.showForm) {
      addForm = <AddMarkerModal handleClose={this.hideModal} show={this.state.showForm} markerCoords={this.state.addingLatLng} />
    }

    return (
      <div className='container'>
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
        {addForm}
      </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBiRoMQJ7KzaoSC9eggZSG4ZlNZKL3cunQ'
  })(Maps);