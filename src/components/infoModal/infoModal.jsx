import React from 'react';
import { CarouselProvider, Image, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './infoModal.css'

const InfoModal = ({ handleClose, show, markerInfo }) => {

    if (show) {
        return (
            <div>
                <div className='markerInfoContainer'>
                    <button className='buttonClose' type="button" onClick={handleClose}>&#10006;</button>
                    <h3>{markerInfo.name}</h3>
                    <p>{markerInfo.description}</p>
                    <p>Adress: {markerInfo.adress}</p>
                    <span>{markerInfo.price}$ per week</span>
                    <CarouselProvider className='carousel'
                    naturalSlideWidth={300}
                    naturalSlideHeight={200}
                    totalSlides={10}>
                        <Slider>
                        <Slide index={0}><Image className='carouselImage' src={markerInfo.photo} /></Slide>
                        <Slide index={1}><Image className='carouselImage' src={markerInfo.sidephotoes[0]} /></Slide>
                        <Slide index={2}><Image className='carouselImage' src={markerInfo.sidephotoes[1]} /></Slide>
                        <Slide index={3}><Image className='carouselImage' src={markerInfo.sidephotoes[2]} /></Slide>
                        <Slide index={4}><Image className='carouselImage' src={markerInfo.sidephotoes[3]} /></Slide>
                        <Slide index={5}><Image className='carouselImage' src={markerInfo.sidephotoes[4]} /></Slide>
                        <Slide index={6}><Image className='carouselImage' src={markerInfo.sidephotoes[5]} /></Slide>
                        <Slide index={7}><Image className='carouselImage' src={markerInfo.sidephotoes[6]} /></Slide>
                        <Slide index={8}><Image className='carouselImage' src={markerInfo.sidephotoes[7]} /></Slide>
                        <Slide index={9}><Image className='carouselImage' src={markerInfo.sidephotoes[8]} /></Slide>
                        </Slider>
                        <ButtonBack className='sliderButton'>Back</ButtonBack>
                        <ButtonNext className='sliderButton'>Next</ButtonNext>
                    </CarouselProvider>
                </div>
            </div>
        )
    }
    return null
}

export default InfoModal