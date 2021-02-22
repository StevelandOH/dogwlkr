import './ProfilePage.css';
import ProfilePetCard from '../ProfilePetCard';
import ProfileUserCard from '../ProfileUserCard';
import ProfileRouteCard from '../ProfileRouteCard';

function ProfilePage() {
    return (
        <div>
            <div className="pet-card-container">
                <ProfilePetCard className="pet-card" />
            </div>
            <div className="user-card-container">
                <ProfileUserCard className="user-card" />
            </div>
            <div className="route-card-container">
                <ProfileRouteCard className="route-card" />
            </div>
        </div>
    );
}

export default ProfilePage;
