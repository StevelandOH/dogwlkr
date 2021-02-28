import './RouteContainer.css';

function RouteContainer({ route, map, photo }) {
    return (
        <div className="route-container">
            <div>
                <h1 className="route-title">{route.title}</h1>

                <img className="route-mapImg" src={map}></img>

                <img className="route-photo" src={photo}></img>

                <div className="route-distance">{`${route.distance} mi`}</div>

                <div className="route-description">{route.description}</div>
            </div>
        </div>
    );
}

export default RouteContainer;
