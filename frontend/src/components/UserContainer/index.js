import './UserContainer.css';
import { useSelector } from 'react-redux';
import stephen from '../../images/stephen copy.jpg';

function UserContainer() {
    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) return null;

    return (
        <div className="user-container">
            <h2 className="usercard-username">{sessionUser.username}</h2>
            <img className="usercard-imgUrl" src={stephen}></img>
            <div className="usercard-email">HMU @ {sessionUser.email}</div>
        </div>
    );
}

export default UserContainer;
