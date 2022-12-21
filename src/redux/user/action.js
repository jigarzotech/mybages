import * as types from './actionType'

export const addUser = (user) => (dispatch) => {
    console.log('action', user);
    dispatch({
        type: types.ADD_USER,
        payload: user,
    });
};

export const getUser = (user) => (dispatch) => {
    console.log({ user });
    dispatch({
        type: types.GET_USER,
        payload: user,
    })
}

export const deleteUser = (id) => (dispatch) => {
    dispatch({
        type: types.DELETE_USER,
        payload: id
    })
}