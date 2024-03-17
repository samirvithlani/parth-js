
const getData = () => {


    var promise = new Promise((resolve,reject)=>{

        // resolve("Data is fetched")
        setTimeout(()=>{
            //resolve("Data is fetched")
            reject("Data is not fetched")
        },3000)

    })

    console.log(promise)
    //if promise gets resolved then .then will be called
    promise.then((data)=>{
        console.log("data...",data)
    })
    promise.catch((error)=>{
        console.log("error...",error)
    })
    




}

//getData()




const placeOrder = () => {


        console.log("Order is about to place")
        var promise = new Promise((resolve,reject)=>{

            setTimeout(()=>{
                    // resolve({
                    //     orderId: 1234,
                    //     message: "Order is placed",
                    //     amount: 1000
                    // })

                    reject({
                        orderId: 1234,
                        message: "Order is not placed",
                    })
            },2000)


        })
        promise.then((data)=>{
            console.log("Order is placed...",data)
        })
        promise.catch((error)=>{
            console.log("Order is not placed...",error)
        })



}

placeOrder()