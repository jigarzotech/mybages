import * as types from './actiontype'

export const addProducts = (products) => (dispatch) => {
    dispatch({
        type: types.ADD_PRODUCTS,
        payload: products,
    });
};

export const getProducts = (products) => (dispatch) => {
    dispatch({
        type: types.GET_PRODUCTS,
        payload: products,
    })
}

export const deleteProducts = (products) => (dispatch) => {
    dispatch({
        type: types.DELETE_PRODUCTS,
        payload: products
    })
}