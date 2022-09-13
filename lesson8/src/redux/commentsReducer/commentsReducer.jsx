import { setError, startLoading } from "../actions"
import { ERROR_COMMENTS, GET_COMMENTS, LOADING_COMMENTS } from "../actionTypes"

const initialState = {
    comments: [],
    isLoading: false,
    isError: false
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_COMMENTS:
            return {
                ...state,
                isLoading: true
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                isLoading: false
            }
        case ERROR_COMMENTS:
            return {
                ...state,
                isError:true
            }

        default:
            return state
    }
}

export const getComments = () => {
    return async dispatch => {
        dispatch(startLoading())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            dispatch({
                type: GET_COMMENTS,
                payload:data
            })
        } catch (e) {
            dispatch(setError());
        }
    }
}