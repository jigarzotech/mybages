import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    carts: []
}
export const cartSlice = createSlice({
    name: "carts",
    initialState,

    reducers: {
        addToCart: (state, action) => {

            let itemIndex = state.carts?.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.carts[itemIndex].cardQuantity += 1;
                toast.info('increased Cart Quantity', {
                    position: "top-center",
                    toastId: 'Cartsuccess',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                const tempProduct = { ...action.payload, cardQuantity: 1 };
                state.carts.push(tempProduct)
                toast.success('product Add to Cart Successfully', {
                    position: "top-center",
                    toastId: 'Cartsuccess',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        },
        removeFromCart: (state, action) => {
            let arr = state.carts.filter(item => item.id !== action.payload.id)
            state.carts = arr;
            toast.error('product remove Successfully', {
                position: "top-center",
                toastId: 'Cartsuccess',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        },
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
