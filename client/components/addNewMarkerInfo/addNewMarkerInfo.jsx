import React from 'react';
import ImageUploader from 'react-images-upload';

import FormInput from '../baseComponents/formInput';
import { markers } from '../../markers';

import './addNewMarker.css'

const AddMarkerModal = ({ handleClose, show, markerCoords }) => {
    let id = 100

    const [pictures, setPictures] = React.useState([])
    const onDrop = (picture) => {
        setPictures(picture)
        console.log(pictures)

        const updatedPictures = {
            ...form,
            photo: pictures[0],
            sidephotoes: pictures.slice(1)
        };
    
        setForm(updatedPictures);

        console.log(form)
    }

    const [form, setForm] = React.useState({
        name: '',
        description: '',
        adress: '',
        price: 0,
        coords: markerCoords,
        photo: '',
        sidephotoes: []
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        const updatedForm = {
            ...form,
            [name]: value
        };
    
        setForm(updatedForm);
    };
    
    const handleSubmit =(event) => {
        
        event.preventDefault();

        form.id = id
        markers.push(form)
        id += 1 

        setForm({
            name: '',
            description: '',
            adress: '',
            price: 0,
            coords: markerCoords
        })
        handleClose()
    }

    if (show) {
        return (
            <div>
                <form onSubmit={handleSubmit} className='addingForm'>
                    <button className='buttonClose' type="button" onClick={handleClose}>&#10006;</button>
                    <div className='form'>
                        <div className='inputForm'>
                            <FormInput 
                                label="Name" 
                                name="name" 
                                value={form.name}
                                onChange={handleFormChange} />
                            <textarea 
                                placeholder="Description" 
                                name="description" 
                                value={form.description}
                                onChange={handleFormChange} />
                            <FormInput 
                                label="Adress" 
                                name="adress" 
                                value={form.adress}
                                onChange={handleFormChange} />
                            <FormInput 
                                label="Price" 
                                name="price" 
                                type="number"
                                value={form.price}
                                onChange={handleFormChange} />
                        </div>
                        <ImageUploader
                            className='uploader'
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    </div>
                    <button className='buttonAddInfo' type='submit'>Submit</button>
                </form>
            </div>
        )   
    }
    return null
}

export default AddMarkerModal