import { csrfFetch } from './csrf';

const SET_PET = 'pets/setPet';

const setPet = ({ pet }) => {
    return {
        type: SET_PET,
        payload: pet,
    };
};

export const createPet = (pet) => async (dispatch) => {
    const res = await csrfFetch('/api/pets', {
        method: 'POST',
        body: JSON.stringify(pet),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.ok) {
        const pet = await res.json();
        dispatch(setPet(pet));
        return pet;
    }
};

const initialState = {};

const petReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PET:
            newState = Object.assign({}, state, {
                [action.payload.id]: action.payload,
            });
            return newState;
        default:
            return state;
    }
};

export default petReducer;
