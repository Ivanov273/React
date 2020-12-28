const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-Message';
let initialMessage = {
    masdialogs: [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Mitya2'},
        {id: 4, name: 'Ylia'},
        {id: 5, name: 'Sveta@'}
    ],
    masmessage: [
        {id: 1, message: 'Hi it is coooooool!!!!'},
        {id: 2, message: 'Hi Very'},
        {id: 3, message: 'Hi Verrry'},
        {id: 4, message: 'Hi VBeryyyyyy'},
        {id: 5, message: 'Hi goooood'}
    ],
    newmessage: 'IT'
}
const messageReducer = (state = initialMessage,action) => {
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