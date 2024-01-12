//array : array is group of similar data type
//dynamic array...
//array growable in nature and shrinkable in nature
var users = ["raj", "ram", "ravi", "raju", "rakesh", "rakesh"];

console.log(users);
users.push("rajesh");
console.log(users);
var removedELm = users.pop();

console.log("removing...", removedELm);
console.log(users);

var x = users.unshift("parth");
console.log("after adding 1 elm new length...", x);
console.log(users);

var removedELm1 = users.shift();
console.log("after removing 1 elm new length...", removedELm1);
console.log(users);

// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
