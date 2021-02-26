import './RoutePage.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRouteById } from '../../store/routes';

function RouteDisplayPage() {
    const dispatch = useDispatch();
    const { routeId } = useParams();
    const route = useSelector((state) => state.route[routeId]);

    // useEffect(() => {
    //     dispatch(getRouteById(routeId));
    // }, [routeId, dispatch]);

    if (!route) return null;

    return (
        <div className="route-display-container">
            <h1>Route Details</h1>
            {route.title && <div className="route-title">{route.title}</div>}
            {route.mapImg && (
                <div className="route-map-img">{route.mapImg}</div>
            )}
            {route.photo && <div className="route-photo">{route.photo}</div>}
            {route.description && (
                <div className="route-description">{route.description}</div>
            )}
            {route.distance && (
                <div className="route-distance">{route.distance}</div>
            )}
        </div>
    );
}

export default RouteDisplayPage;
