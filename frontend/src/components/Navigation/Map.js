import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MapDropdown() {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <div>
            <div className="map-title-container" onMouseEnter={openMenu}>
                Maps🔻
            </div>

            <div onMouseLeave={closeMenu}>
                {showMenu && (
                    <div className="map-dropdown-container">
                        <NavLink className="create-route-link" to="/new/route">
                            Create a Route
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MapDropdown;
