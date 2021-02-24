import './RouteCreatePage.css';
import MapSection from '../../utils/Map.jsx';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createRoute } from '../../store/routes';

function RouteCreatePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const addTitle = (e) => setTitle(e.target.value);
    const addDescription = (e) => setDescription(e.target.value);

    const location = {
        lat: 41.4993,
        lng: -81.6944,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            description,
            userId,
        };
        const createdRoute = await dispatch(createRoute(payload));
        if (createdRoute) {
            console.log('route created!!!');
            history.push('/');
        }
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
                                onChange={addTitle}
                                required
                            />
                        </div>
                        <div className="description-container">
                            <textarea
                                placeholder="description"
                                cols="10"
                                rows="5"
                                className="description-input"
                                type="text"
                                value={description}
                                onChange={addDescription}
                                required
                            />
                        </div>
                        <button type="submit">Create Route</button>
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
