// document.getElementById("btn").addEventListener("click",()=>{
//     alert("Button Clicked")
// })

var button = document.getElementById("btn");
button.addEventListener("click",()=>{
    alert("Button Clicked")
})
button.addEventListener("mouseover",()=>{
    button.style.backgroundColor = "red"
})


var div = document.getElementsByClassName("row")
console.log(div)
div[0].addEventListener("mouseover",()=>{

    div[0].style.backgroundColor = "green"

})

div[0].addEventListener("mouseout",()=>{
    div[1].innerHTML = "<h1>Welcome</h1>"
})


const circle = document.getElementsByName("circle")[0]
circle.addEventListener("mousemove",()=>{

    for(let i=0;i<div.length;i++){
        div[i].style.backgroundColor = "blue"
    }
})