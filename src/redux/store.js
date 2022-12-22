import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [reduxThunk];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)))
