var users = ["ram", "shyam", "hari", "gita", "sita","parth","priya","kunal"];

// users.forEach((u)=>{
//     console.log(u);
// })

//map --> it will return new array with same length
// users.map((u)=>{
//     console.log(u);
// })

var newUsers =[]

for(let i=0;i<users.length;i++){
    //newUsers[i]  = users[i].toUpperCase();
    //newUsers.push(users[i].toUpperCase());
}
console.log(newUsers); // ["RAM", "SHYAM", "HARI", "GITA", "SITA", "PARTH", "PRIYA", "KUNAL"]

users  = users.map((u)=>{
    return u.toUpperCase();
})
console.log(users); // ["RAM", "SHYAM", "HARI", "GITA", "SITA", "PARTH", "PRIYA", "KUNAL"]