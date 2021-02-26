import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function DashboardDropdown() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    };

    return (
        <div>
            <div className="dashboard-title-container" onClick={toggleMenu}>
                Dashboard🔻
            </div>

            <div onMouseLeave={toggleMenu} onClick={toggleMenu}>
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
