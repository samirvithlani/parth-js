function goa(){

    console.log("Goa");
}
function amstredam(){

    console.log("Amsterdam");
}

function lasvegas(){

    console.log("Las Vegas");
}

//cb callback
function travel(cb){


    cb() //goa

}

var budget = 1000

if(budget <500){
    
        travel(goa)
}
else if(budget <1000){
    
        travel(amstredam)
}
else{
        
            travel(lasvegas)
}

// travel(goa)
// travel(amstredam)
// travel(lasvegas)