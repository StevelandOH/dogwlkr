import './RouteCreatePage.css';
import MapContainer from '../Map';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createRoute } from '../../store/routes';

function RouteCreatePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const distance = useSelector((state) => state.distance);

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
        console.log(distance);
        const createdRoute = await dispatch(createRoute(payload));
        if (createdRoute) {
            console.log('route created!!!');
            history.push('/');
        }
    };

    return (
        <div>
            <div className="new-route-container">
                <div>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                        <div className="title-container">
                            <input
                                placeholder="name this route"
                                className="title-input"
                                type="text"
                                value={title}
                                onChange={addTitle}
                                required
                            />
                        </div>
                        <div className="description-container">
                            <textarea
                                placeholder="describe the area a little"
                                cols="10"
                                rows="5"
                                className="description-input"
                                type="text"
                                value={description}
                                onChange={addDescription}
                                required
                            />
                        </div>
                        <div>
                            <p
                                value={MapContainer.distance}
                                className="distance-text"
                            >
                                distance:
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <MapContainer />;
        </div>
    );
}

export default RouteCreatePage;
