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
                │ activities │ ⌄
            </div>

            <div onMouseLeave={toggleMenu} onClick={toggleMenu}>
                {showMenu && (
                    <div className="activity-dropdown-container">
                        <div className="link-container">
                            <NavLink
                                className="create-activity-link"
                                to="/new/activity"
                            >
                                Add an Activity
                            </NavLink>
                        </div>
                        <div className="link-container">
                            <NavLink className="activity-link" to="/activities">
                                View Activities
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ActivityDropdown;
