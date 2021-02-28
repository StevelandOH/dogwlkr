import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { createPet } from '../../store/pets';
import { useHistory } from 'react-router-dom';
import './Navigation.css';

function DashboardDropdown() {
    Modal.setAppElement(document.getElementById('root'));
    const dispatch = useDispatch();
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [birthday, setBirthday] = useState('');

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const addName = (e) => setName(e.target.value);
    const addBreed = (e) => setBreed(e.target.value);
    const addBirthday = (e) => setBirthday(e.target.value);

    const toggleModal = () => {
        if (modalIsOpen) setModalIsOpen(false);
        else if (!modalIsOpen) setModalIsOpen(true);
    };

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

    const style = {
        overlay: {
            position: 'fixed',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0, 0, 0.9)',
            zIndex: '100000',
        },
        content: {
            position: 'absolute',
            top: '100px',
            left: '40%',

            height: '500px',
            width: '300px',
            border: '1px solid #ccc',
            background: '#fff',
            borderRadius: '3em',
            outline: 'none',
        },
    };

    return (
        <div>
            <div className="add-a-pet" onClick={toggleModal}>
                │ add pet │ ⌄
            </div>
            <Modal
                style={style}
                isOpen={modalIsOpen}
                parentSelector={() => document.querySelector('.add-a-pet')}
            >
                <div>
                    <h1>Add a Pet</h1>
                    <form
                        className="pet-form-container"
                        onSubmit={handleSubmit}
                    >
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
                        <button onClick={toggleModal}>Cancel</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default DashboardDropdown;
