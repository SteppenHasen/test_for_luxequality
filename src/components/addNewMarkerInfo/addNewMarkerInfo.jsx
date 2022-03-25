import React from 'react';
import FormInput from '../baseComponents/formInput';
import { markers } from '../../markers';

import './addNewMarker.css'

const AddMarkerModal = ({ handleClose, show, markerCoords }) => {
    let id = 100

    const [form, setForm] = React.useState({
        name: '',
        description: '',
        adress: '',
        price: 0,
        coords: markerCoords
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
                        <button className='buttonAddInfo' type='submit'>Submit</button>
                </form>
            </div>
        )   
    }
    return null
}

export default AddMarkerModal