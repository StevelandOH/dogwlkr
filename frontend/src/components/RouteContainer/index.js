import './RouteContainer.css';

function RouteContainer({ route, map, photo }) {
    function handleEditAction() {
        alert(`Will edit activity with the id of ${route.id}`);
    }
    function handleTrashAction() {
        alert(`Will delete activity with the id of ${route.id}`);
    }

    return (
        <div className="route-container">
            <div>
                <h1 className="route-title">{route.title}</h1>
                {map && <img className="route-mapImg" src={map}></img>}
                {photo && <img className="route-photo" src={photo}></img>}
                <div className="route-distance">{`${route.distance} mi`}</div>
                <div className="route-description">{route.description}</div>
                <div className="route-edit-delete">
                    <a onClick={handleTrashAction}>
                        {' '}
                        <i className="far fa-edit"></i>
                    </a>{' '}
                    |
                    <a onClick={handleTrashAction}>
                        {' '}
                        <i className="fas fa-trash-alt"></i>
                    </a>{' '}
                </div>
            </div>
        </div>
    );
}

export default RouteContainer;
