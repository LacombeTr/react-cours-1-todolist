import { useState } from "react";
import "./CreateZone.css";

export const CreateZone = ({ handleChange, handleAddGoal }) => {
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        setValue(e.target.value);
        handleChange(e.target.value);
    };

    return (
        <div className='create-zone'>
            <input
                className='create-zone__input'
                type='text'
                value={value}
                onChange={handleInputChange}
                placeholder='Entrez un nouvel objectif'
            />
            <button className='create-zone__button' onClick={handleAddGoal}>
                Ajouter
            </button>
        </div>
    );
};
