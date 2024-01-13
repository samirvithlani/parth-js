function sum(a,b){
    return a+b;
}

const sum1 = (a,b)=>{
    return a+b;
}

const add = (a,b)=>a+b;



var x = sum(10,20);
var y = sum1(10,20);
console.log(x);
console.log(y);

var z = add(10,20);
console.log(z);



const isEven = (num)=>{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

const isOdd = (num)=> num %2 ==0 ? true : false;

var ans = isEven(10);
console.log(ans);

console.log(isOdd(17));

