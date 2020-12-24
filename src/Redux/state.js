import profileReducer from "./Profile-reducer";
import messageReducer from "./Message-reducer";
import navReducer from "./Nav-reducer";


let store = {
    _state:  {
        Profile: {
            mypostdata: [
                {id: 0, message: "Hi how are you", likes: 11},
                {id: 1, message: "Hi how are you", likes: 25},
                {id: 2, message: "it s goot", likes: 23},
                {id: 2, message: "it  a map", likes: 55555553}
            ],
            newPostdata: 'It'


        },
        Message: {
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
        },
        Nav: {
            FirstNav:
                [
                    {id: 1, to: 'Profile', item: 'Profile'},
                    {id: 2, to: 'Dialog', item: 'Message'},
                    {id: 3, to: 'News', item: 'News'},
                    {id: 4, to: 'Music', item: 'Music'},
                    {id: 5, to: 'Settings', item: 'Settings'}
                ],
            Friends: [
                {id: 1, name: 'Mike'},
                {id: 1, name: 'Alex'},
                {id: 1, name: 'Viktor'}
            ]
        }


    },
    _rebootS() {
        console.log('calbackRebootS')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rebootS = observer
    },


    dispatch(action) {
       this._state.Profile = profileReducer(this._state.Profile,action)
       this._state.Message = messageReducer(this._state.Message,action)
       this._state.Nav = navReducer(this._state.Nav,action)
        this._rebootS(this._state)
    }

}



export default store;