import { csrfFetch } from './csrf';

const SET_ROUTE = 'routes/SET_ROUTE';

const setRoute = (route) => {
    return {
        type: SET_ROUTE,
        payload: route,
    };
};

// SET ALL ROUTES
export const setAllRoutes = (userId) => async (dispatch) => {
    const res = await fetch(`/api/routes/${userId}`);
    if (res.ok) {
        const routes = await res.json();
        dispatch(setRoute(routes));
        return routes;
    }
};

// CREATE ROUTE THUNK
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

// UPDATE A ROUTE THUNK
export const updateRoute = (route) => async (dispatch) => {
    const res = await csrfFetch(`/api/routes/${route.id}`, {
        method: 'PUT',
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

const initialState = {};

const routeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_ROUTE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default routeReducer;
