import { csrfFetch } from './csrf';

const SET_ROUTE = 'routes/SET_ROUTE';
const LOAD_ROUTES = 'routes/LOAD_ROUTES';

const setRoute = (route) => ({
    type: SET_ROUTE,
    payload: route,
});

const loadRoutes = ({ list }) => ({
    type: LOAD_ROUTES,
    list,
});

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

// GET ROUTE BY ID THUNK
export const getRouteById = (id) => async (dispatch) => {
    const res = await fetch(`/api/routes/${id}`);
    if (res.ok) {
        const route = await res.json();
        dispatch(createRoute(route));
    }
};

// GET A LIST OF ALL ROUTES THUNK
export const getAllRoutes = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/routes`);
    if (res.ok) {
        const list = await res.json();
        dispatch(loadRoutes(id));
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
            const newState = {};
            console.log(action.payload);
            action.payload.forEach((route) => {
                newState[route.id] = route;
            });

            return { ...state, ...newState };
        case LOAD_ROUTES:
            newState = Object.assign({}, state, newState);

            return newState;
        default:
            return state;
    }
};

export default routeReducer;
