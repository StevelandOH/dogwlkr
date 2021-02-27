import { csrfFetch } from './csrf';

const SET_ACTIVITY = 'activities/SET_ACTIVITIES';

const setActivity = (activity) => {
    return {
        type: SET_ACTIVITY,
        payload: activity,
    };
};

export const setAllActivities = (userId) => async (dispatch) => {
    const res = await fetch(`/api/activities/${userId}`);
    if (res.ok) {
        const activities = await res.json();
        dispatch(setActivity(activities));
        return activities;
    }
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
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default activityReducer;
