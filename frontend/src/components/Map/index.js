import React, { useState, useEffect, useCallback } from 'react';

import './Map.css';
import {
    DistanceMatrixService,
    GoogleMap,
    LoadScript,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api';

const DistanceCalcContainer = ({ coords, setDistance }) => {
    const distCallback = useCallback((response) => {
        setDistance(
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

const MapContainer = () => {
    const mapStyles = {
        height: '100vh',
        width: '100%',
    };

    const defaultCenter = {
        lat: 41.3851,
        lng: 2.1734,
    };
    const [distance, setDistance] = useState(0);
    const [coords, setCoords] = useState([]);

    const onClick = (e) => {
        setCoords([...coords, { lat: e.latLng.lat(e), lng: e.latLng.lng(e) }]);
    };

    return (
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
                    <MemoDistanceService
                        setDistance={setDistance}
                        coords={coords}
                    />
                )}
            </GoogleMap>
            <button className="submit-route">SUBMIT</button>
        </LoadScript>
    );
};

export default MapContainer;
