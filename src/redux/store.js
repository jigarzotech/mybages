import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';

const middleware = [reduxThunk];

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