import './PetContainer.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PetContainer({ pet, photo }) {
    return (
        <div className="pet-container">
            <h3 className="pet-title">{pet.name}</h3>
            <img className="pet-mapImg" src={photo}></img>
            <div className="pet-photo">{pet.breed}</div>
            <div className="pet-description">{pet.birthday}</div>
        </div>
    );
}

export default PetContainer;
