import * as types from './actionType'

export const addUser = (user) => (dispatch) => {
    dispatch({
        type: types.ADD_USER,
        payload: user,
    });
};

export const getUser = (user) => (dispatch) => {
    // console.log({ user });
    dispatch({
        type: types.GET_USER,
        payload: user,
    })
}

export const deleteUser = (user) => (dispatch) => {
    dispatch({
        type: types.DELETE_USER,
        payload: user
    })
}