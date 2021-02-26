import './ActivityForm.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity } from '../../store/activities';
import { useHistory } from 'react-router-dom';

function FormPageActivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [actDistance, setActDistance] = useState('');
    const [focus, setFocus] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            type,
            date,
            time,
            actDistance,
            focus,
            duration,
            notes,
            userId,
        };
        const createdActivity = await dispatch(createActivity(payload));
        if (createdActivity) {
            console.log('activity created!!!');
            history.push('/profile');
        }
    };

    const addType = (e) => setType(e.target.value);
    const addDate = (e) => setDate(e.target.value);
    const addTime = (e) => setTime(e.target.value);
    const addActDistance = (e) => setActDistance(e.target.value);
    const addFocus = (e) => setFocus(e.target.value);
    const addDuration = (e) => setDuration(e.target.value);
    const addNotes = (e) => setNotes(e.target.value);

    return (
        <div className="activity-page">
            <div className="activity-container">
                <form onSubmit={handleSubmit}>
                    <div className="type-container">
                        <input
                            className="type-input"
                            type="text"
                            value={type}
                            onChange={addType}
                            placeholder="Type"
                            required
                        />
                    </div>
                    <div className="date-container">
                        <input
                            className="date-input"
                            type="text"
                            value={date}
                            onChange={addDate}
                            placeholder="date"
                            required
                        />
                    </div>
                    <div className="time-container">
                        <input
                            className="time-input"
                            type="text"
                            value={time}
                            onChange={addTime}
                            placeholder="time"
                            required
                        />
                    </div>
                    <div className="actDistance-container">
                        <input
                            className="actDistance-input"
                            type="text"
                            value={actDistance}
                            onChange={addActDistance}
                            placeholder="actDistance"
                        />
                    </div>
                    <div className="focus-container">
                        <input
                            className="focus-input"
                            type="text"
                            value={focus}
                            onChange={addFocus}
                            placeholder="focus"
                        />
                    </div>
                    <div className="duration-container">
                        <input
                            className="duration-input"
                            type="text"
                            value={duration}
                            onChange={addDuration}
                            placeholder="duration"
                        />
                    </div>
                    <div className="notes-container">
                        <textArea
                            className="notes-input"
                            value={notes}
                            onChange={addNotes}
                            placeholder="notes"
                        />
                    </div>

                    <button className="activity-button" type="submit">
                        Add Activity
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormPageActivity;
