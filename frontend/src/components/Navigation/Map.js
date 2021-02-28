import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MapDropdown() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    };

    return (
        <div>
            <div className="map-title-container" onClick={toggleMenu}>
                │ map │ ⌄
            </div>

            <div onMouseLeave={toggleMenu} onClick={toggleMenu}>
                {showMenu && (
                    <div className="map-dropdown-container">
                        <div className="link-container">
                            <NavLink
                                className="create-route-link"
                                to="/new/route"
                            >
                                Create Route
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MapDropdown;
