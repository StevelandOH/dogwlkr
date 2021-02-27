import React, { useState } from 'react';
import Modal from 'react-modal';

function ModalComponent({ table }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F0AA89',
        },
    };

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true);
    };

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal style={customStyles} isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
            </Modal>
        </>
    );
}
export default ModalComponent;
