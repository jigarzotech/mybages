import * as types from './actionType'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Products: [],
    // product: {},
    loading: false
};

const productReducers = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
        // case types.GET_PRODUCTS:
        //     return {
        //         ...state,
        //         Products: action.payload,
        //         loading: false
        //     };
        // case types.DELETE_PRODUCTS:
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

// const userSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         getProduct: (state, action) => {
//             state.Products = action.payload;
//             state.loading = true;
//         },
//         addProduct: (state, action) => {
//             state.Products.unshift(action.payload);
//             state.loading = false;
//             console.log(action.payload);
//         },
//         deleteProduct: (state, action) => {
//             state.Products.filter((product) => product.id !== action.payload.id);
//             state.loading = false;
//         },
//     },
// });
// export const { getProduct, addProduct, deleteProduct } = userSlice.actions;
// export default userSlice.reducer;