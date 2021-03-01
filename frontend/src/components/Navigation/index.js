import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import MapDropdown from './Map';
import ActivityDropdown from './Activities';
import AddPet from './AddPet';

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
                <div>
                    <AddPet />
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
                        DOGWLKR
                    </NavLink>
                </div>
            </nav>
        );
    }
}

export default Navigation;
