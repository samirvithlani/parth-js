// var txt = document.getElementById("txt").innerHTML
// console.log(txt)

// document.getElementById("txt").innerHTML = "Hello World"

function changeText() {
  var txt = document.getElementById("txt").innerHTML;
  console.log(txt);

  document.getElementById("txt").innerHTML = "Hello World";
}

function changeColor() {
  var myDiv = document.getElementById("myDiv");
  myDiv.style.backgroundColor = "red";
  myDiv.style.color = "white";
  myDiv.style.fontSize = "20px";
  myDiv.style.height = "200px";
  myDiv.style.width = "400px";
  myDiv.style.border = "1px solid black";
}
function changeLink() {
  const myLink = document.getElementById("myLink");
  myLink.href = "https://www.netflix.com";
  myLink.innerHTML = "Netflix";
  myLink.target = "_blank";
}
