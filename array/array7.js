var users = ["ram", "shyam", "hari", "gita", "sita","parth","priya","kunal"];

//filter will return new array with filtered data
var filarray = users.filter((u)=>{
    return u.length>4; //predicate
})

// for(let i=0;i<users.length;i++){


//     if(users[i].length>4){

//         filarray.push(users[i]);
//     }
// }

console.log(filarray); // ["shyam", "priya", "kunal"]


var name = "gita";

var newUsers = users.filter((u)=>{

    return u!=name;
})
console.log(newUsers); // ["ram", "shyam", "hari", "sita", "parth", "priya", "kunal"]
