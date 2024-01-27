var users = ["ram", "shyam", "hari", "gita", "sita","parth","priya","kunal"];

// var flag = false;
// for(let i=0;i<users.length;i++){

//         if(users[i].length>5){
//             flag = true;
//             break;
//         }
// }
// console.log(flag); // true

//users[i]
//predicate means what we are checking will retuen true or false
var flag = users.some((u)=>{
    //ram.length>5 // false
    //shyam.length>5 // false
    return u.length>4;
})
console.log(flag); // true

var flag1 = users.some((u)=>u.startsWith("h"))
console.log(flag1); // true
