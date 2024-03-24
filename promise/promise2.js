// const fetchData = () =>{


//         return new Promise((resolve,reject)=>{

//                 setTimeout(()=>{
//                     resolve("promise has been resolved...")
//                 },3000)
//         })


// }

// var x = fetchData();
// console.log(x); // 100
// x.then((data)=>{
//     console.log("data...",data)
// })
// x.catch((error)=>{
//     console.log("error...",error)
// })


const fetchData = () =>{


    return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                resolve("promise has been resolved...")
            },3000)
    })


}

fetchData().then((data)=>{
    console.log("data...",data)
}).catch((error)=>{
    console.log("error...",error)
})