import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import userReducer from "./user/userReducer";
import wishlistReducer from "./wishlist/wishlistReducer";
const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    carts: cartReducer,
    wishlist: wishlistReducer
})
export default rootReducer;