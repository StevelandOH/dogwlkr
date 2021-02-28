import './PetContainer.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PetContainer({ pet, photo }) {
    return (
        <div className="pet-container">
            <h3 className="pet-title">{pet.name}</h3>
            {photo && <img className="pet-mapImg" src={photo}></img>}
            <div className="pet-photo">{pet.breed}</div>
            <div className="pet-description">{pet.birthday}</div>

            <div className="pet-edit-delete">
                <a onClick={() => console.log('clicked edit')}>
                    {' '}
                    <i className="far fa-edit"></i>
                </a>{' '}
                |
                <a onClick={() => console.log('clicked delete')}>
                    {' '}
                    <i className="fas fa-trash-alt"></i>
                </a>{' '}
            </div>
        </div>
    );
}

export default PetContainer;
