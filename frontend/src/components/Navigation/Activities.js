import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, setAllActivities } from '../../store/activities';

function ActivityDropdown() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [actDistance, setActDistance] = useState('');
    const [focus, setFocus] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');
    const [dogName, setDogName] = useState('');
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector((state) => state.session.user);

    const toggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    };

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    };

    const addType = (e) => setType(e.target.value);
    const addDate = (e) => setDate(e.target.value);
    const addTime = (e) => setTime(e.target.value);
    const addActDistance = (e) => setActDistance(e.target.value);
    const addFocus = (e) => setFocus(e.target.value);
    const addDuration = (e) => setDuration(e.target.value);
    const addNotes = (e) => setNotes(e.target.value);

    const style = {
        overlay: {
            textAlign: 'center',
            backgroundColor: 'rgba(0,0, 0, 0.9)',
            zIndex: '100000',
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalIsOpen(false);
        let newErrors = [];
        dispatch(
            createActivity({
                type,
                date,
                time,
                actDistance,
                focus,
                duration,
                notes,
                dogName,
                userId: sessionUser.id,
            })
        )
            .then(() => {
                setType('');
                setDate('');
                setTime('');
                setActDistance('');
                setFocus('');
                setDuration('');
                setNotes('');
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    newErrors = data.errors;
                    setErrors(newErrors);
                }
            });
        history.push('/activities');
    };

    return (
        <div>
            <div className="activity-title-container" onClick={toggleMenu}>
                │ activities │ ⌄
            </div>

            <div onMouseLeave={toggleMenu} onClick={toggleMenu}>
                {showMenu && (
                    <div className="activity-dropdown-container">
                        <div
                            onClick={toggleModal}
                            className="create-activity-link"
                        >
                            Add an Activity
                        </div>
                        <div className="link-container">
                            <NavLink className="activity-link" to="/activities">
                                View Activities
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
            <Modal
                className="modal-container"
                style={style}
                isOpen={modalIsOpen}
                // parentSelector={() =>
                //     document.querySelector('.activity-title-container')
                // }
            >
                <div>
                    <h1 className="activity-add-title">Add Activity</h1>
                    <form onSubmit={handleSubmit}>
                        {/* <div className='left-half' */}
                        <div className="which-pet-container">
                            <label>tell us your dogs name</label>
                            <input
                                className="which-pet-input a"
                                type="text"
                                value={dogName}
                                onChange={(e) => setDogName(e.target.value)}
                                placeholder="which pet?"
                                required
                            />
                        </div>
                        <div className="activity-add-title">
                            ___________________________________________________
                        </div>
                        <div className="type-container">
                            <label>what type of activity was it</label>
                            <input
                                className="type-input a"
                                type="text"
                                value={type}
                                onChange={addType}
                                placeholder="Type"
                                required
                            />
                        </div>
                        <div className="activity-add-title">
                            ___________________________________________________
                        </div>
                        <div className="date-container">
                            <label>what was the date</label>
                            <input
                                className="date-input a"
                                type="text"
                                value={date}
                                onChange={addDate}
                                placeholder="date"
                                required
                            />
                        </div>
                        <div className="activity-add-title">
                            ___________________________________________________
                        </div>
                        <div className="time-container">
                            <label>and what was the time</label>
                            <input
                                className="time-input a"
                                type="text"
                                value={time}
                                onChange={addTime}
                                placeholder="time"
                                required
                            />
                        </div>
                        <div className="activity-add-title">
                            ___________________________________________________
                        </div>
                        <div className="actDistance-container">
                            <label>how far did yall go</label>
                            <input
                                className="actDistance-input a"
                                type="text"
                                value={actDistance}
                                onChange={addActDistance}
                                placeholder="actDistance"
                            />
                        </div>
                        <div className="or">or</div>
                        <div className="focus-container">
                            <label>
                                what was the focus of the training session
                            </label>
                            <input
                                className="focus-input a"
                                type="text"
                                value={focus}
                                onChange={addFocus}
                                placeholder="focus"
                            />
                        </div>
                        <div className="activity-add-title">
                            ___________________________________________________
                        </div>
                        <div className="duration-container">
                            <label>how long did yall go for</label>
                            <input
                                className="duration-input a"
                                type="text"
                                value={duration}
                                onChange={addDuration}
                                placeholder="duration"
                            />
                        </div>
                        <div className="activity-add-title">
                            ___________________________________________________
                        </div>
                        <div className="notes-container">
                            <label>any additional notes</label>
                            <textarea
                                className="notes-input a"
                                value={notes}
                                onChange={addNotes}
                                placeholder="notes"
                            />
                        </div>
                        <div className="activity-add-title">
                            ___________________________________________________
                        </div>
                        <button className="activity-button " type="submit">
                            Add Activity
                        </button>
                        <button onClick={toggleModal}>Cancel</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default ActivityDropdown;
