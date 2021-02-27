import './RoutePage.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAllRoutes } from '../../store/routes';

function RouteDisplayPage() {
    const dispatch = useDispatch();
    const { routeId } = useParams();
    const route = useSelector((state) => state.routes[routeId]);
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(setAllRoutes(sessionUser.id));
    }, [sessionUser.id, dispatch]);

    if (!route) return null;

    return (
        <div className="route-display-container">
            <h1>Route Details</h1>
            <div className="route-title">{route.title}</div>
            <div className="route-map-img">{route.mapImg}</div>
            <div className="route-photo">{route.photo}</div>
            <div className="route-description">{route.description}</div>
            <div className="route-distance">{route.distance}</div>
        </div>
    );
}

export default RouteDisplayPage;
