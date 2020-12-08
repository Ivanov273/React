let mypostdata=[
    {id:0,message:"Hi how are you",likes:11},
    {id:1,message:"Hi how are you",likes:25},
    {id:2,message:"it s goot",likes:23},
    {id:2,message:"it  a map",likes:55555553}
]

let masdialogs =[
    {id:1,name:'Mike'},
    {id:2,name:'Viktor'},
    {id:3,name:'Mitya2'},
    {id:4,name:'Ylia'},
    {id:5,name:'Sveta@'},
]
let masmessage=[
    {id:1,message:'Hi it is coooooool!!!!'},
    {id:2,message:'Hi Very'},
    {id:3,message:'Hi Verrry'},
    {id:4,message:'Hi VBeryyyyyy'},
    {id:5,message:'Hi goooood'},
]
let state = {
    Profile :{
        mypostdata: [
            {id:0,message:"Hi how are you",likes:11},
            {id:1,message:"Hi how are you",likes:25},
            {id:2,message:"it s goot",likes:23},
            {id:2,message:"it  a map",likes:55555553}
        ]
    },
    Message:{
        masdialogs: [
            {id:1,name:'Mike'},
            {id:2,name:'Viktor'},
            {id:3,name:'Mitya2'},
            {id:4,name:'Ylia'},
            {id:5,name:'Sveta@'}
        ],
        masmessage: [
            {id:1,message:'Hi it is coooooool!!!!'},
            {id:2,message:'Hi Very'},
            {id:3,message:'Hi Verrry'},
            {id:4,message:'Hi VBeryyyyyy'},
            {id:5,message:'Hi goooood'}
        ]
    },
    Nav:{
        FirstNav:
            [
                {id:1,to:'Profile',item:'Profile'},
                {id:2,to:'Dialog',item:'Message'},
                {id:3,to:'News',item:'News'},
                {id:4,to:'Music',item:'Music'},
                {id:5,to:'Settings',item:'Settings'}
            ],
        Friends:[
            {id:1,name:'Mike'},
            {id:1,name:'Alex'},
            {id:1,name:'Viktor'}
        ]
    }



}
export default state;