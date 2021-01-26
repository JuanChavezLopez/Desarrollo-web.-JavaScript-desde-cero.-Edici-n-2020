// const getUser =(id, cb) =>{  /* cb = callback */
//     const user = {
//         name: 'Juan',
//         id:id
//     }
//     // EJECUTAMOS LA FUNCION DE CALLBACK
//     if(id == 2) cb('User not exist')
//     else cb(null, user)
// }


// // ESTAMOS PASANDO EL PARAMETRO A LA FUNCION

// getUser(1, (err, user)=>{
//     if (err){
//      return console.log(err);
//     }
        
//     console.log(`User name is ${user.name}`)
// });

const users =[
    {
        id:1,
        name:'Juan'
    },{
        id:2,
        name:'LAURA'
    },{
        id:3,
        name:'CARLOS'
    }
]


const emails =[
    {
        id:1,
        email:'jchav64gamil.com'
    },{
        id:2,
        email:'Juan@yahoo.com'
    }
]

// !FUNCION QUE BUSCA EN EL ARRAY DE OBJETOS
const getUser = (id,cb) =>{
    const user = users.find(temp =>temp.id ==id) /* variable temporal para recorrer el array */
    console.log(user);
}

getUser(2);