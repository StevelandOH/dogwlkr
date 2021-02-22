import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <div className="login-signup-container">
                    <NavLink className="login-signup-link" to="/login">
                        Log In
                    </NavLink>
                </div>
                <div className="login-signup-container">
                    <NavLink className="login-signup-link" to="/signup">
                        Sign Up
                    </NavLink>
                </div>
            </>
        );
    }

    return (
        <nav className="nav">
            <div className="nav-left">
                <div className="home-button">
                    <NavLink className="home-link" exact to="/">
                        Dogwlkr
                    </NavLink>
                </div>
            </div>
            <div className="nav-right">{isLoaded && sessionLinks}</div>
        </nav>
    );
}

export default Navigation;
