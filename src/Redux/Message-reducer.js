const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-Message';

const messageReducer = (state,action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let lastMessage = {
                id: 2222,
                message: state.newmessage
            }
            state.masmessage.push(lastMessage)
            state.newmessage = ''
            return state
        case CHANGE_MESSAGE:
            state.newmessage = action.newtextmessages;
            return state
        default:
            return state
    }


}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeMessageActionCreator = (text) => ({type: CHANGE_MESSAGE, newtextmessages: text})

export default messageReducer