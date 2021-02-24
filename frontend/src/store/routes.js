import sessionReducer from './session';
import { csrfFetch } from './csrf';

const SET_ROUTE = 'routes/setRoute';

const setRoute = (route) => {
    return {
        type: SET_ROUTE,
        payload: route,
    };
};

export const createRoute = (route) => async (dispatch) => {
    const res = await csrfFetch('/api/routes', {
        method: 'POST',
        body: JSON.stringify(route),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.ok) {
        const route = await res.json();
        dispatch(setRoute(route));
        return route;
    }
};

const initialState = { route: null };

const routeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ROUTE:
            newState = Object.assign({}, state);
            newState.route = action.payload;
            return newState;
        default:
            return state;
    }
};

export default routeReducer;
