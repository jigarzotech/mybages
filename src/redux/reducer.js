import * as types from './actionType'

const initialState = {
    Products: [],
    product: {},
    loading: false
};

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
                loading: false
            };
        case types.DELETE_PRODUCTS:
        case types.ADD_PRODUCTS:
            return {
                ...state,
                Products: [action.payload, ...state.Products],
                loading: false
            }
        default:
            return state;
    }
}

export default productReducers;
