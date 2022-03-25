import React from 'react';

import './markerDetails.css'

const markerDetails = ({markerInfo}) => {
    return (
        <div className='detailscontainer'>
            <div>
                <h3>{markerInfo.name}</h3>
                <p className='description'>{markerInfo.description}</p>
                <div className='smalltextline'>
                    <p className='small adress'>{markerInfo.adress}</p>
                    <p className='small price'>{markerInfo.price}$</p>
                </div>
            </div>
            <img src={markerInfo.photo} alt='mainphoto'></img>
        </div>
    )
}

export default markerDetails