import './RouteContainer.css';

function RouteContainer({ route, map, photo }) {
    return (
        <div className="route-container">
            <div>
                <h1 className="route-title">{route.title}</h1>
                {map && <img className="route-mapImg" src={map}></img>}
                {photo && <img className="route-photo" src={photo}></img>}
                <div className="route-distance">{`${route.distance} mi`}</div>
                <div className="route-description">{route.description}</div>
                <div className="route-edit-delete">
                    <a onClick={() => console.log('clicked edit')}>
                        {' '}
                        <i className="far fa-edit"></i>
                    </a>{' '}
                    |
                    <a onClick={() => console.log('clicked delete')}>
                        {' '}
                        <i className="fas fa-trash-alt"></i>
                    </a>{' '}
                </div>
            </div>
        </div>
    );
}

export default RouteContainer;
