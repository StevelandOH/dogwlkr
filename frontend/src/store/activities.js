import { csrfFetch } from './csrf';

const SET_ACTIVITY = 'activities/setActivities';

const setActivity = ({ activity }) => {
    return {
        type: SET_ACTIVITY,
        payload: activity,
    };
};

export const createActivity = (activity) => async (dispatch) => {
    const res = await csrfFetch('/api/activities', {
        method: 'POST',
        body: JSON.stringify(activity),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.ok) {
        const activity = await res.json();
        dispatch(setActivity(activity));
        return activity;
    }
};

const initialState = {};

const activityReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ACTIVITY:
            newState = Object.assign({}, state, {
                [action.payload.id]: action.payload,
            });
            return newState;
        default:
            return state;
    }
};

export default activityReducer;
