import './RouteContainer.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function RouteContainer({ route }) {
    return (
        <div className="route-container">
            <h1>Route Details</h1>
            <div>
                <div className="route-title">TITLE: {route.title}</div>
                <div className="route-mapImg">MAPIMG: {route.mapImg}</div>
                <div className="route-photo">PHOTO: {route.photo}</div>
                <div className="route-description">
                    DESCRIPTION: {route.description}
                </div>
                <div className="route-distance">DISTANCE: {route.distance}</div>
            </div>
        </div>
    );
}

export default RouteContainer;
