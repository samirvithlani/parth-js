var data = "A hi ram"

var x = data.codePointAt(1)
console.log(x)
var x1 = data.charCodeAt(1)
console.log(x1)

//var p = String.fromCharCode(97)
var p  = String.fromCodePoint(data.codePointAt(0))
console.log("p - >",p)

//toupper case 