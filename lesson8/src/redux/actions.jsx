import { ERROR_COMMENTS, LOADING_COMMENTS } from "./actionTypes";

export const startLoading = () => (
    {
        type:LOADING_COMMENTS
    }
)

export const setError = () => (
    {
        type: ERROR_COMMENTS,
        isError: true
    }
)