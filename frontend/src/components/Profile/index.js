import './Profile.css';
import PetContainer from '../PetContainer';
import UserContainer from '../UserContainer';
import RouteContainer from '../RouteContainer';
import { setAllRoutes } from '../../store/routes';
import { setAllPets } from '../../store/pets';
import { setAllActivities } from '../../store/activities';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import one from '../../images/route-1-4-87 copy.jpg';
import two from '../../images/route-2-0-74 copy.jpg';
import three from '../../images/route-3-1-24 copy.jpg';
import four from '../../images/route-4-0-41 copy.jpg';
import five from '../../images/route-5-2-68 copy.jpg';
import six from '../../images/route-photo-1 copy.jpg';
import seven from '../../images/route-photo-2 copy.jpg';
import eight from '../../images/route-photo-3 copy.jpg';
import nine from '../../images/route-photo-4 copy.jpg';
import ten from '../../images/route-photo-5 copy.jpg';
import reggie from '../../images/reggie copy.jpg';
import sebastian from '../../images/sebastian copy.jpg';

function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const routes = useSelector((state) => state.routes);
    const pets = useSelector((state) => state.pets);
    const map = [one, two, three, four, five];
    const photo = [six, seven, eight, nine, ten];
    const petPhoto = [reggie, sebastian];

    useEffect(() => {
        if (sessionUser) {
            dispatch(setAllRoutes(sessionUser.id));
            dispatch(setAllPets(sessionUser.id));
            dispatch(setAllActivities(sessionUser.id));
        }
    }, [dispatch, sessionUser?.id]);

    if (!sessionUser) return null;
    if (!routes || routes === '') return null;
    if (!pets || pets === '') return null;

    return (
        <div className="profile-flex-container">
            <div className="profile-top-half">
                <div className="user-card-container">
                    <UserContainer className="user-card" />
                </div>
                <div className="pet-card-container">
                    {Object.values(pets).map((pet, idx) => (
                        <PetContainer
                            photo={petPhoto[idx]}
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
                    {Object.values(routes).map((route, idx) => (
                        <RouteContainer
                            route={route}
                            key={route.id}
                            className="route-card"
                            map={map[idx]}
                            photo={photo[idx]}
                        />
                    ))}
                </div>
                <div className="right-profile-container"></div>
            </div>
        </div>
    );
}

export default ProfilePage;
