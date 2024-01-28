var products =[
    {
        id:101,
        name:"iphone 15",
        price:1500,
        category:"mobile",
        isAvailable:true,
        colors:["black","white","red","blue"],
    },
    {
        id:102,
        name:"samsung s20",
        price:1200,
        category:"mobile",
        isAvailable:true,
        colors:["black","white"],
    },
    {
        id:103,
        name:"macbook pro",
        price:2500,
        category:"laptop",
        isAvailable:false,
        colors:["black","grey"],
    }
]


var filProduct = products.filter((prod)=>{


    return prod.price>=1200 && prod.price<=1500;
})
console.log(filProduct);

//reduce will return single value

// var total = products.reduce((sum,prod)=>{
//     return sum+prod.price;
// },0)

var total = products.reduce((sum,prod)=>sum+prod.price,0)
console.log(total);


var filProduct2 = products.filter((prod)=>{

    return prod.colors.includes("white");
})

console.log(filProduct2);



// var total = 0

// products.forEach((prod)=>{

//     total = total + prod.price;

// })
// console.log(total);
