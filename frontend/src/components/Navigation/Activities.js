import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function ActivityDropdown() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    };

    return (
        <div>
            <div className="activity-title-container" onClick={toggleMenu}>
                Activities🔻
            </div>

            <div onMouseLeave={toggleMenu} onClick={toggleMenu}>
                {showMenu && (
                    <div className="activity-dropdown-container">
                        <p>
                            <NavLink
                                className="create-activity-link"
                                to="/new/activity"
                            >
                                Add an Activity
                            </NavLink>
                        </p>
                        <p>
                            <NavLink className="activity-link" to="/activities">
                                View Activities
                            </NavLink>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ActivityDropdown;
