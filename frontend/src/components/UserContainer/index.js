import './UserContainer.css';
import { useSelector } from 'react-redux';

function UserContainer() {
    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) return null;

    return (
        <div className="user-container">
            <h1>User Details</h1>
            <div>
                <div className="usercard-username">
                    TYPE: {sessionUser.username}
                </div>
                <div className="usercard-email">TYPE: {sessionUser.email}</div>
                <div className="usercard-imgUrl">
                    DATE: {sessionUser.imgUrl}
                </div>
            </div>
        </div>
    );
}

export default UserContainer;
