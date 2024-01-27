var users = ["ram", "shyam", "hari", "gita", "sita","parth","priya","kunal"];

// var flag = true;
// for(let i=0;i<users.length;i++){
    
//     if(users[i].length<4){
//         flag = false;
//         break;
//     }
// }
// console.log(flag); // 


var flag = users.every((u)=>{
    return u.length>4;
})
console.log(flag); // false