import './Profile.css';
import PetContainer from '../PetContainer';
import UserContainer from '../UserContainer';
import RouteContainer from '../RouteContainer';
import { Redirect } from 'react-router-dom';
import { setAllRoutes } from '../../store/routes';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/session';

function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        if (sessionUser) {
            dispatch(setAllRoutes(sessionUser.id));
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
