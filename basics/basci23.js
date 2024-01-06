
var a = 10;
console.log("out side of block",a);
{
    let b = 20;
    console.log("inside block",b);
    console.log("inside block",a);
    
}

//console.log("out side of block",b); //error

var x =100;

{
    var x =200;    
    console.log("inside block",x);
}
console.log("outside block",x);

let p =20;
// var p = 200
// let p =200 error


const pi = 3.14;
console.log("pi = ",pi);
//pi = 3.142; //error
