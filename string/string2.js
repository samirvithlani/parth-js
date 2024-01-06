var data = "Elon Musk"

//var x = data.startsWith("Elon")
//var x = data.startsWith("n",3)
//console.log(x)

var message = "I am going to plant bomb in the city"
//var x = message.includes("m")
var x = message.includes("m",25)
console.log(x)

var threat = "Hi this is omar zafar and  i am going to plant BomB in your city"
threat = threat.toLowerCase()

var x = threat.includes("bomb")
console.log(x)
if(x==true){
    // alert("Threat found")
}

//var ind = threat.indexOf("is")
var ind = threat.indexOf("issss",7)
console.log("ind...",ind)

var ind = threat.lastIndexOf("i")
console.log("ind...",ind)



