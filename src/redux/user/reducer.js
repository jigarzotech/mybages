import * as types from './actionType'

const initialState = {
    user: {},
    loading: false
};

const userReducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case types.DELETE_USER:
        case types.ADD_USER:
            return {
                ...state,
                user: [action.payload, ...state.user],
                loading: false

            }
        default:
            return state;
    }
}

export default userReducer;