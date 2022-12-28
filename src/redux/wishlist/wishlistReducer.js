import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addtoWishListSuccess, addtoWishListSuccessToast, alreadytoWishListAlert, alreadytoWishListAlertToast, removetoWishListError, removetoWishListErrorToast } from "../../components/toast/toastMessage";

const initialState = {
    wishlists: []
}
export const wishlistSlice = createSlice({
    name: "wishlists",
    initialState,

    reducers: {
        addToWishlist: (state, action) => {

            let itemIndex = state.wishlists?.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                toast.info(alreadytoWishListAlert, alreadytoWishListAlertToast);
            }
            else {
                const tempProduct = { ...action.payload };
                state.wishlists.push(tempProduct)
                toast.success(addtoWishListSuccess, addtoWishListSuccessToast);
            }
        },
        removeFromWishlist: (state, action) => {
            let arr = state.wishlists.filter(item => item.id !== action.payload.id)
            state.wishlists = arr;
            toast.error(removetoWishListError, removetoWishListErrorToast);
        },


    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
