const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

 const profileReducer=(state,action)=>{
     switch (action.type){
         case ADD_POST:
             let lastPost = {
                 id: 5,
                 message: state.newPostdata,
                 likes: 6666787686
             }
             state.mypostdata.push(lastPost)
             state.newPostdata = ''
             return state
         case CHANGE_POST:
             state.newPostdata = action.newtext;
             return state
         default:
             return state
     }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostActionCreator = (text) => ({type: CHANGE_POST, newtext: text})
export default profileReducer