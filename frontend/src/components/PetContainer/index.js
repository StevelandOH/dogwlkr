import './PetContainer.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PetContainer({ pet }) {
    return (
        <div className="pet-container">
            <h1>Pet Details</h1>
            <div>
                <div className="pet-title">NAME: {pet.name}</div>
                <div className="pet-mapImg">IMGURL: {pet.imgUrl}</div>
                <div className="pet-photo">BREED: {pet.breed}</div>
                <div className="pet-description">BIRTHDAY: {pet.birthday}</div>
            </div>
        </div>
    );
}

export default PetContainer;
