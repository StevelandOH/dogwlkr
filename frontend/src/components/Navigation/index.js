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
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav className="nav">
            <img src="/Users/stephen/Desktop/dogwlkr/frontend/src/images/top-screen-logo.png"></img>
            <div className="home-button">
                <NavLink className="home-link" exact to="/">
                    Dogwlkr
                </NavLink>
            </div>
            {isLoaded && sessionLinks}
        </nav>
    );
}

export default Navigation;
