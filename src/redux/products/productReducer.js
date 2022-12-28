import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}
export const productsSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
        },
        deleteProducts: (state, action) => {
            state.products = action.payload
        },
        getProducts: (state, action) => {
            state.products = action.payload
        },

    }
})

export const { addProducts, getProducts, deleteProducts } = productsSlice.actions;

export default productsSlice.reducer;
