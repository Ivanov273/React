let firstNav = {
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
const navReducer=(state=firstNav,action)=>{
    return state
}
export default navReducer