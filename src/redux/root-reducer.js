import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/reducer";
import userReducer from "./user/reducer";
const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    carts: cartReducer,
})
export default rootReducer;