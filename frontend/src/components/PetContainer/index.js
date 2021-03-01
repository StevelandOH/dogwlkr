import './PetContainer.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderCell, Table, Column, Cell } from 'rsuite-table';

function PetContainer({ pet, photo }) {
    function handleEditAction() {
        alert(`Will edit activity with the id of ${pet.id}`);
    }
    function handleTrashAction() {
        alert(`Will delete activity with the id of ${pet.id}`);
    }
    console.log(pet);
    return (
        <div className="pet-container">
            <h3 className="pet-title">{pet.name}</h3>
            {photo && <img className="pet-mapImg" src={photo}></img>}
            <div className="pet-photo">{pet.breed}</div>
            <div className="pet-description">{pet.birthday}</div>
            <div>
                <div className="pet-edit-delete">
                    <a onClick={handleEditAction}>
                        {' '}
                        <i className="far fa-edit"></i>
                    </a>{' '}
                    |
                    <a onClick={handleTrashAction}>
                        {' '}
                        <i className="fas fa-trash-alt"></i>
                    </a>{' '}
                </div>
            </div>
        </div>
    );
}

export default PetContainer;
