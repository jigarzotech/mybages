import { combineReducers } from "redux";
import productReducers from "./reducer";
import userReducer from "./user/reducer";


const rootReducer = combineReducers({
    data: productReducers,
    user: userReducer,
})
export default rootReducer;