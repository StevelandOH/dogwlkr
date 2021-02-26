import './Profile.css';
import PetContainer from '../PetContainer';
import UserContainer from '../UserContainer';
import RouteContainer from '../RouteContainer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function ProfilePage() {
    const sessionUser = useSelector((state) => state.session.user);
    if (!sessionUser) return <Redirect to="/" />;

    return (
        <div>
            <div className="pet-card-container">
                <PetContainer className="pet-card" />
            </div>
            <div className="user-card-container">
                <UserContainer className="user-card" />
            </div>
            <div className="route-card-container">
                <RouteContainer className="route-card" />
            </div>
        </div>
    );
}

export default ProfilePage;
