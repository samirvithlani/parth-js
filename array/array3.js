const data = [10,2,0,45,67,44,332,13]

console.log(data);

// data.reverse()
// console.log(data);

function sortByValue(a,b){

    return a-b
}

data.sort(sortByValue)
console.log(data);



x = data.join("-")
console.log(x);

