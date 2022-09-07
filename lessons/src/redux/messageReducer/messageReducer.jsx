const initialState = {
    messages: [
        {
            id: 1,
            title: 'Hello world',
            chatId: 2
        },
        {
            id: 2,
            title: 'Where are you from',
            chatId: 1
        },
        {
            id: 3,
            title: 'Options',
            chatId: 4
        },
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}