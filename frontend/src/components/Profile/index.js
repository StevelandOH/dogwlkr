import './Profile.css';
import PetContainer from '../PetContainer';
import UserContainer from '../UserContainer';
import RouteContainer from '../RouteContainer';
import { setAllRoutes } from '../../store/routes';
import { setAllPets } from '../../store/pets';
import { setAllActivities } from '../../store/activities';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import map1 from '../../images/route-1-4-87 copy.jpg';
import map2 from '../../images/route-2-0-74 copy.jpg';
import map3 from '../../images/route-3-1-24 copy.jpg';
import map4 from '../../images/route-4-0-41 copy.jpg';
import map5 from '../../images/route-5-2-68 copy.jpg';
import map6 from '../../images/map-1-78.jpg';
import map7 from '../../images/map-1-48.jpg';
import photo1 from '../../images/route-photo-1 copy.jpg';
import photo2 from '../../images/route-photo-2 copy.jpg';
import photo3 from '../../images/route-photo-3 copy.jpg';
import photo4 from '../../images/route-photo-4 copy.jpg';
import photo5 from '../../images/route-photo-5 copy.jpg';
import photo6 from '../../images/photo1.jpg';
import photo7 from '../../images/photo2.jpg';
import reggie from '../../images/reggie copy.jpg';
import sebastian from '../../images/sebastian copy.jpg';
import dog1 from '../../images/dog1.jpg';
import dog2 from '../../images/dog2.jpg';
import dog3 from '../../images/dog3.jpg';

function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const routes = useSelector((state) => state.routes);
    const pets = useSelector((state) => state.pets);
    const map = [map1, map2, map3, map4, map5, map6, map7];
    const photo = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];
    const petPhoto = [reggie, sebastian, dog1, dog2, dog3];

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
