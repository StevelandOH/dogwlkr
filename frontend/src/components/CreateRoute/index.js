import './CreateRoute.css';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createRoute } from '../../store/routes';
import {
    DistanceMatrixService,
    GoogleMap,
    LoadScript,
    Marker,
} from '@react-google-maps/api';

const DistanceCalcContainer = ({ coords, setDist }) => {
    const distCallback = useCallback((response) => {
        console.log(response);
        setDist(
            (prevDistance) =>
                prevDistance +
                response.rows[0].elements[0].distance.value / 1609.344
        );
    });
    return (
        <DistanceMatrixService
            options={{
                destinations: [coords[coords.length - 1]],
                origins: [coords[coords.length - 2]],
                travelMode: 'WALKING',
            }}
            callback={distCallback}
        />
    );
};

const MemoDistanceService = React.memo(DistanceCalcContainer);

function RouteCreatePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const [dist, setDist] = useState(0);
    const [coords, setCoords] = useState([]);

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const addTitle = (e) => setTitle(e.target.value);
    const addDescription = (e) => setDescription(e.target.value);

    const mapStyles = {
        height: '100vh',
        width: '100%',
    };

    const defaultCenter = {
        lat: 41.4993,
        lng: -81.6944,
    };

    const onClick = (e) => {
        setCoords([...coords, { lat: e.latLng.lat(e), lng: e.latLng.lng(e) }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const distance = dist.toFixed(2);
        const payload = {
            title,
            description,
            userId,
            distance,
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
                            <p className="distance-text">
                                {`distance ${dist.toFixed(2)}`}
                            </p>
                        </div>
                        <button type="submit" className="submit-route">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
            <LoadScript googleMapsApiKey="AIzaSyAPg1BvA6UXhRQsmuS9m0e3d5tTQAUlqQI">
                <GoogleMap
                    onClick={onClick}
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                >
                    {coords.map((el, idx) => (
                        <Marker key={idx} position={el} />
                    ))}
                    {coords.length >= 2 && (
                        <div>
                            <MemoDistanceService
                                setDist={setDist}
                                coords={coords}
                            />
                        </div>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default RouteCreatePage;
