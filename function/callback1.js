//single thread application 
// multiple thread application
//banking... withdraw --> 1
// 2 thread --> balance -->
//callback...

function demo(){

    console.log("hello")
}


function add(x){

    console.log(x) //10 //ram //true //null //function
    x()

}
// add(10)
// add("ram")
// add(true)
// add(null)
add(demo)
