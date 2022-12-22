import * as types from './actionType'

export const addCartItem = (item) => (dispatch) => {
    console.log("action", item);
    dispatch({
        type: types.ADD_CARD_ITEM,
        payload: item,
    });
};

export const getCartItems = (items) => (dispatch) => {
    dispatch({
        type: types.GET_CARD_ITEM,
        payload: items,
    });
};

export const deleteCartItem = (id) => (dispatch) => {
    dispatch({
        type: types.DELETE_CARD_ITEM,
        payload: id,
    });
};