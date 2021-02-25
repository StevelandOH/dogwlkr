import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Dog from '../../images/Untitled.jpg';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div>
            <div className="logout-container">
                <img
                    src={Dog}
                    className="logout-picture"
                    onMouseEnter={openMenu}
                ></img>
            </div>

            <div onMouseLeave={closeMenu}>
                {showMenu && (
                    <div className="dropdown-container">
                        <p style={{ color: 'white' }}>{user.username}</p>
                        <p>{user.email}</p>
                        <button className="logout-button" onClick={logout}>
                            logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfileButton;
