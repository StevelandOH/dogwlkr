const SET_ROUTE = 'routes/setRoute';

const setRoute = (route) => {
    return {
        type: SET_ROUTE,
        payload: route,
    };
};

export const createRoute = (route) => async (dispatch) => {
    const { title, description } = route;
    const response = await ('/api/routes',
    {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
        }),
    });
    const data = await response.json();
    dispatch(setRoute(data.route));
    return response;
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
