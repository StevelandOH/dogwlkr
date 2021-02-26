import './PetForm.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPet } from '../../store/pets';
import { useHistory } from 'react-router-dom';

function FormPageActivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [birthday, setBirthday] = useState('');

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name,
            breed,
            birthday,
            userId,
        };
        const createdPet = await dispatch(createPet(payload));
        if (createdPet) {
            console.log('pet created!!!');
            history.push('/profile');
        }
    };

    const addName = (e) => setName(e.target.value);
    const addBreed = (e) => setBreed(e.target.value);
    const addBirthday = (e) => setBirthday(e.target.value);

    return (
        <div className="pet-page">
            <div className="pet-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="name-container">
                        <input
                            className="name-input"
                            type="text"
                            value={name}
                            onChange={addName}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="breed-container">
                        <input
                            className="breed-input"
                            type="text"
                            value={breed}
                            onChange={addBreed}
                            placeholder="breed(ish)"
                            required
                        />
                    </div>
                    <div className="birthday-container">
                        <input
                            className="birthday-input"
                            type="text"
                            value={birthday}
                            onChange={addBirthday}
                            placeholder="birthday(ish)"
                            required
                        />
                    </div>
                    <button className="add-pet-button" type="submit">
                        Add Pet
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormPageActivity;
