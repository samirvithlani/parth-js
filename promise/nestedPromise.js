const order = () =>{




        return new Promise((reslove,reject)=>{

            setTimeout(()=>{
                reslove({
                    orderId: 1234,
                    message: "Order is placed",
                    amount: 1000
                })
            },2000)
        })

}


const payment = (orderData) =>{

    console.log("Payment is about to done")
    //console.log("order data in payment...",orderData)
    return new Promise((reslove,reject)=>{

        setTimeout(()=>{
            reslove({
                transactionId: 456,
                message: "Payment is done",
                amount: orderData.amount,
                orderId: orderData.orderId
            })
        },2000)


    })

}

//callback hell
//async await...
console.log("Order is about to place")
order().then((data)=>{
    console.log("Order is placed...",data)
    payment(data).then((paymentData)=>{
        console.log("Payment is done...",paymentData)
    }).catch((error)=>{
        console.log("Payment is not done...",error)
    })
}).catch((error)=>{
    console.log("Order is not placed...",error)
})

