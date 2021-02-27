import './Profile.css';
import PetContainer from '../PetContainer';
import UserContainer from '../UserContainer';
import RouteContainer from '../RouteContainer';
import { setAllRoutes } from '../../store/routes';
import { setAllPets } from '../../store/pets';
import { setAllActivities } from '../../store/activities';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ActivityForm from '../ActivityForm';

function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const routes = useSelector((state) => state.routes);
    const pets = useSelector((state) => state.pets);

    useEffect(() => {
        if (sessionUser) {
            dispatch(setAllRoutes(sessionUser.id));
            dispatch(setAllPets(sessionUser.id));
            dispatch(setAllActivities(sessionUser.id));
        }
    }, [dispatch, sessionUser?.id]);

    if (!sessionUser) return null;
    if (!routes) return null;
    if (!pets) return null;

    return (
        <div className="profile-flex-container">
            <div className="profile-top-half">
                <div className="user-card-container">
                    <UserContainer className="user-card" />
                </div>
                <div className="pet-card-container">
                    {Object.values(pets).map((pet) => (
                        <PetContainer
                            pet={pet}
                            key={pet.id}
                            className="pet-card"
                        />
                    ))}
                </div>
            </div>
            <div className="profile-bottom-half">
                <div className="left-profile-container"></div>
                <div className="route-card-container">
                    {Object.values(routes).map((route) => (
                        <RouteContainer
                            route={route}
                            key={route.id}
                            className="route-card"
                        />
                    ))}
                </div>
                <div className="right-profile-container"></div>
            </div>
        </div>
    );
}

export default ProfilePage;
