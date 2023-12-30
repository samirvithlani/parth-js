var p =20
let q = 30
{
    var a = 10
    console.log("inside block a = ",a)
    let x = 20
    console.log("inside block x = ",x)
    var p = 30
    console.log("inside block p = ",p)
    let q = 40
    console.log("inside block q = ",q)
}

console.log("out side block a = ",a)
console.log("inside block p = ",p)
console.log("inside block q = ",q)
//console.log("out side block x = ",x) //error