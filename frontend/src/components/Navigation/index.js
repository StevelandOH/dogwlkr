import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';

import './Navigation.css';

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) {
        return (
            <nav className="nav-logged-in">
                <div className="home-link-container">
                    <NavLink className="home-link" exact to="/profile">
                        DOGWLKR
                    </NavLink>
                </div>
                <div className="dashboard-nav-link-container">
                    <NavLink className="dashboard-link" to="/profile">
                        Dashboard
                    </NavLink>
                </div>
                <div className="activities-nav-link-container">
                    <NavLink className="activities-link" to="/activities">
                        Activities
                    </NavLink>
                </div>
                <div className="routes-nav-link-container">
                    <NavLink className="routes-link" to="/routes/create">
                        Map
                    </NavLink>
                </div>
                <div className="profile-button-container">
                    <ProfileButton user={sessionUser} />
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="nav-logged-out">
                <div className="home-link-container">
                    <NavLink className="home-link" exact to="/">
                        Dogwlkr
                    </NavLink>
                </div>
            </nav>
        );
    }
}

export default Navigation;
