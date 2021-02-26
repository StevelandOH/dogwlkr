import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function DashboardDropdown() {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <div>
            <div className="dashboard-title-container" onMouseEnter={openMenu}>
                Dashboard🔻
            </div>

            <div onMouseLeave={closeMenu}>
                {showMenu && (
                    <div className="dashboard-dropdown-container">
                        <NavLink className="dashboard-link" to="/profile">
                            View Profile
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashboardDropdown;
