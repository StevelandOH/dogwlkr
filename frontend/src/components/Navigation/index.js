import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import MapDropdown from './Map';
import ActivityDropdown from './Activities';
import DashboardDropdown from './Dashboard';
import { useState } from 'react';

import './Navigation.css';

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);

    const [showMenu, setShowMenu] = useState(false);

    if (sessionUser) {
        return (
            <nav className="nav-logged-in">
                <div className="home-link-container">
                    <NavLink className="home-link" exact to="/profile">
                        DOGWLKR
                    </NavLink>
                </div>
                <div>
                    <DashboardDropdown />
                </div>

                <div>
                    <ActivityDropdown />
                </div>
                <div>
                    <MapDropdown />
                </div>
                <div>
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
