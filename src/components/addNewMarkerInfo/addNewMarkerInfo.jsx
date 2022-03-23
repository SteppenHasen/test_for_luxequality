import React from 'react';
import FormInput from '../baseComponents/formInput';

import './addNewMarker.css'

const AddMarkerModal = ({ handleClose, show, markerCoords }) => {
    const showHideClassName = show ? "display-block" : "display-none";

    const [form, setForm] = React.useState({
        name: '',
        description: '',
        adress: '',
        price: 0,
        markerCoords: markerCoords
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        const updatedForm = {
            ...form,
            [name]: value
        };
    
        console.log('Form changed: ', updatedForm);
    
        setForm(updatedForm);
    };
    
    const handleSubmit =(event) => {
        console.log(form);
        event.preventDefault();
    }

    return (
        <div className={showHideClassName}>
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

export default AddMarkerModal