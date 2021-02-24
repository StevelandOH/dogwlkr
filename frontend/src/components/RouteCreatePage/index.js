import './RouteCreatePage.css';
import MapSection from '../../utils/Map.jsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/routes';

function RouteCreatePage() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    const location = {
        lat: 41.4993,
        lng: -81.6944,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = [];
        dispatch(sessionActions.createRoute({ title, description })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    newErrors = data.errors;
                    setErrors(newErrors);
                }
            }
        );
    };
    return (
        <div>
            <div className="new-route-container">
                <div className="route-header">
                    <h1>new route</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                        <div className="title-container">
                            <input
                                placeholder="route title"
                                className="title-input"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="description-container">
                            <input
                                placeholder="description"
                                className="description-input"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                    <div>distance:</div>
                    <div>elevation:</div>
                </div>
            </div>
            <MapSection location={location} zoomLevel={17} />;
        </div>
    );
}

export default RouteCreatePage;
