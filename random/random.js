
var images = ["forest.jpg","ocean.jpg","rain.jpg","sunset.jpg"]



const changeImage = () =>{
    var myImage = document.getElementById("image")
    var random = Math.floor(Math.random()*images.length)
    console.log(random)

    var path = "../images/"+images[random]
    console.log(path)
    myImage.src = path




}