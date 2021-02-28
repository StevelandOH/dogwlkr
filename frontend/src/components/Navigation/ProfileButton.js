import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import Dog from '../../images/Untitled.jpg';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    };

    const logout = async (e) => {
        e.preventDefault();

        await dispatch(sessionActions.logout());
        history.push('/login');
    };

    return (
        <div>
            <div className="logout-container">
                <img
                    src={Dog}
                    className="logout-picture"
                    onClick={toggleMenu}
                ></img>
            </div>

            <div onMouseLeave={toggleMenu} onClick={toggleMenu}>
                {showMenu && (
                    <div className="logout-dropdown-container">
                        <p>{user.username}</p>
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
