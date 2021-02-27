import { csrfFetch } from './csrf';

const SET_PET = 'pets/SET_PET';

const setPet = (pet) => {
    return {
        type: SET_PET,
        payload: pet,
    };
};
// SET ALL Pets
export const setAllPets = (userId) => async (dispatch) => {
    const res = await fetch(`/api/pets/${userId}`);
    if (res.ok) {
        const pets = await res.json();
        dispatch(setPet(pets));
        return pets;
    }
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
            const newState = {};
            action.payload.forEach((pet) => {
                newState[pet.id] = pet;
            });
            return { ...state, ...newState };
        default:
            return state;
    }
};

export default petReducer;
