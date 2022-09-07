const initialState = {
    chats: [
        {
            id: 1,
            name: "Kirill Bunin"
        },
        {
            id: 2,
            name: "Alexei Ivanon"
        },
        {
            id: 3,
            name: "Svetlana Butakova"
        }
    ]
} 

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete': 
            return {
                ...state,
                chats: state.chats.filter((chat) => chat.id !== action.payload)
            }
        case 'add':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }

            default: 
            return state
    }
}