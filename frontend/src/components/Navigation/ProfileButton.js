import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div>
            <div className="button-conainter">
                <button onClick={openMenu}>
                    <i className="fas fa-bone" />
                </button>
            </div>
            <div>
                {showMenu && (
                    <div className="dropdown-container">
                        <p style={{ color: 'white' }}>{user.username}</p>
                        <p>{user.email}</p>
                        <button onClick={logout}>logout</button>
                    </div>

                    // <ul>
                    //     <li>{user.username}</li>
                    //     <li>{user.email}</li>
                    //     <li>
                    //         <button onClick={logout}>Log Out</button>
                    //     </li>
                    // </ul>
                )}
            </div>
        </div>
    );
}

export default ProfileButton;
