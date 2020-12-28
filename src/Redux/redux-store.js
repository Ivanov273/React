import {combineReducers, createStore} from "redux";
import messageReducer from "./Message-reducer";
import navReducer from "./Nav-reducer";
import profileReducer from "./Profile-reducer";
let reducers = combineReducers({
    Profile:profileReducer,
    Message:messageReducer,
    Nav:navReducer
})
let store = createStore(reducers);

export default store
