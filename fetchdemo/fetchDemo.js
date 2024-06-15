// const getApiDemo1 = async () => {

//     const response = await fetch("https://node5.onrender.com/user/user",{
//         method: 'GET',
//     }) //promise<any> promise<response>
//     console.log(response)
//     const data = await response.json()
//     console.log(data)


// }
// getApiDemo1()


const getDemo2 = async () => {

    const obj = {
        name:"sam",
        age:20,
        email:"sam@gmail.com",
        isActive:true
    }
    const response = await fetch("https://node5.onrender.com/user/user",{
        method: 'POST',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'}
        }) //promise<any> promise<response>
    console.log(response)
    
    const data = await response.json()
    console.log(data)


}

getDemo2()