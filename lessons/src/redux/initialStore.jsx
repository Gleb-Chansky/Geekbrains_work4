import { createStore, combineReducers, applyMiddleware } from 'redux';
import { chatReducer } from './chatReducer/chatReducer';
import { messageReducer } from './messageReducer/messageReducer';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger/src'
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    chats: chatReducer,
    message: messageReducer
})

const persisterReducer = persistReducer(persistConfig, reducer)

const timer = store => next => action => {
    const delay = action?.meta?.delay 
    if (!delay) {
        return next(action)
    }

    const timeout = setTimeout(() => next(action), delay)

    return () => {
        clearTimeout(timeout)
    }
}

const logger = createLogger({
    diff: true,
    collapsed: true
})
export const store = createStore(persisterReducer, applyMiddleware(timer))//logger
export const persist = persistStore(store)