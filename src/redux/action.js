import axios from 'axios'
import * as types from './actionType'

const getProducts = (Products) => ({
    type: types.GET_PRODUCTS,
    payload: Products,
})
const productDeleted = () => ({
    type: types.DELETE_PRODUCTS,
})
// const productAdded = () => ({
//     type: types.ADD_PRODUCTS,
// })

export const addProduct = (product) => (dispatch) => {
    console.log('action', product);
    dispatch({
        type: types.ADD_PRODUCTS,
        payload: product,
    });
};

export const loadProducts = () => {
    return function (dispatch) {

        dispatch(getProducts())

    }
}
export const deleteProduct = (id) => {
    return function (dispatch) {

        dispatch(productDeleted(id))

    }
}
// export const addProduct = (product) => {
//     return function (dispatch) {

//         dispatch(productAdded(product))
//     }
// }
// export const addUsers = (user) => {
//     return function (dispatch) {
//         axios.post(`${process.env.REACT_APP_API}`, user)
//             .then((res) => {
//                 console.log({ res });
//                 dispatch(userAdded())
//             })
//             .catch((error) => console.log(error))
//     }
// }