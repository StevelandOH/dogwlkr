import './Activities.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllActivities } from '../../store/activities';

function ActivitiesDisplayPage() {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activity);
    const sessionUser = useSelector((state) => state.session.user);
    const act = Object.values(activities);

    useEffect(() => {
        dispatch(setAllActivities(sessionUser.id));
    }, [sessionUser.id, dispatch]);

    if (!act) return null;

    return (
        <div className="activity-display-container">
            <h1>Activity Details</h1>
            <div>
                {act &&
                    act.map((activity, i) => (
                        <>
                            {i + 1}
                            <div className="activity-pet-name">
                                TYPE: {activity.type}
                            </div>
                            <div className="activity-type">
                                TYPE: {activity.type}
                            </div>
                            <div className="activity-date">
                                DATE: {activity.date}
                            </div>
                            <div className="activity-time">
                                TIME: {activity.time}
                            </div>
                            <div className="activity-distance">
                                DISTANCE: {activity.distance}
                            </div>
                            <div className="activity-focus">
                                FOCUS: {activity.focus}
                            </div>
                            <div className="activity-duration">
                                DURATION: {activity.duration}
                            </div>
                            <div className="activity-notes">
                                NOTES: {activity.notes}
                            </div>
                        </>
                    ))}
            </div>
        </div>
    );
}

export default ActivitiesDisplayPage;
