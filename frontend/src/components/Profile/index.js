import './Profile.css';
import PetContainer from '../PetContainer';
import UserContainer from '../UserContainer';
import RouteContainer from '../RouteContainer';
import { setAllRoutes } from '../../store/routes';
import { setAllPets } from '../../store/pets';
import { setAllActivities } from '../../store/activities';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const usersPets = useSelector((state) => state.pets);
    const petIds = Object.keys(usersPets);

    useEffect(() => {
        if (sessionUser) {
            dispatch(setAllRoutes(sessionUser.id));
            dispatch(setAllPets(sessionUser.id));
            petIds.forEach((id) => dispatch(setAllActivities(id)));
        }
    }, [dispatch, sessionUser?.id]);

    if (!sessionUser) return null;

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
