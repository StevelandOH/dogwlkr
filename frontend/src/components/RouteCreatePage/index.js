import './RouteCreatePage.css';
import MapSection from '../../utils/Map.jsx';

const location = {
    lat: 41.4993,
    lng: -81.6944,
};

function RouteCreatePage() {
    return <MapSection location={location} zoomLevel={17} />;
}

export default RouteCreatePage;
