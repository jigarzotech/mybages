import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addtoCartSuccess, addtoCartSuccessToast, decreaseQntInfo, decreaseQntinfoToast, increaseQntInfo, increaseQntinfoToast, maximumQntInfo, maximumQntInfoToast, removetoCartError, removetoCartErrorToast } from "../../components/toast/toastMessage";

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
                if (action.payload.cardQuantity >= 10) {
                    toast.info(maximumQntInfo, maximumQntInfoToast);

                }
                else {
                    state.carts[itemIndex].cardQuantity += 1;
                    toast.info(increaseQntInfo, increaseQntinfoToast);
                }
            }
            else {
                const tempProduct = { ...action.payload, cardQuantity: 1 };
                state.carts.push(tempProduct)
                toast.success(addtoCartSuccess, addtoCartSuccessToast);
            }
        },
        removeFromCart: (state, action) => {
            let arr = state.carts.filter(item => item.id !== action.payload.id)
            state.carts = arr;
            toast.error(removetoCartError, removetoCartErrorToast);
        },
        decreaseQuantity: (state, action) => {

            let itemIndex = state.carts?.findIndex((item) => item.id === action.payload.id)
            console.log({ itemIndex });


            if (itemIndex >= 0 && action.payload.cardQuantity > 1) {

                state.carts[itemIndex].cardQuantity -= 1;
                toast.info(decreaseQntInfo, decreaseQntinfoToast);
            }

            else {
                let arr = state.carts.filter(item => item.id !== action.payload.id)
                state.carts = arr;
                toast.error(removetoCartError, removetoCartErrorToast);
            }
        }

    }
})

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
