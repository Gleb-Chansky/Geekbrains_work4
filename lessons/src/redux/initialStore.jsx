import { createStore, combineReducers } from 'redux';
import { chatReducer } from './chatReducer/chatReducer';
import { messageReducer } from './messageReducer/messageReducer';

const reducer = combineReducers({
    chats: chatReducer,
    message: messageReducer
})

export const store = createStore(reducer)