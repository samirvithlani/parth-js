//function -->
//def:function is group of statements to perform specific task
// ------------------------------------ console.log("------------------------------------")
//50 times... drawLine(){"---------"}   call();

//advantage of function
//1)code reusability
// 2)code optimization
// 3)length of program will be less
// 4)easy to debug
// 5)easy to maintain
// 6)easy to understand
// 7)easy to extend
// 8)easy to test
// 9)easy to modify
// 10)easy to read


//type of functions

//2 type of functions  1)predefined functions 2)user defined functions

//js does not have datatype --->
/// void demo() int sum()
//function keyword is used to define function, arrow function
//4 type of function
// 1)function with no argument and no return type
// 2)function with argument and no return type
// 3)function with no argument and return type
// 4)function with argument and return type

function demo(){

    console.log("hello world");
    console.log("without argument and without return type");

}

//by default param scope will be local
function add(a,b){
    
    let c = a+b;
    //return a+b;
    return c;
}

//with args no return type
function mul(a,b,c){

    let ans = a*b*c;
    console.log(ans);
}

demo()
var ans = add(100,20)
console.log(ans);
console.log(add(100,200));
var x  = mul(10,20,30);
console.log(x);