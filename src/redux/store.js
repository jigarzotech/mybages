import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middleware = [reduxThunk];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middleware))

// import { configureStore } from '@reduxjs/toolkit'
// import initialPayloadReducer from './reducer/initialPayloadReducer';


// export const store = configureStore({
//     reducer: {
//         "initial": initialPayloadReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// })

// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./reducer";
// export const store = configureStore({
//     reducer: {
//         product: userSlice,
//     },
// });
// export default store;