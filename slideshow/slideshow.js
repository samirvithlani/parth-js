const images = ["forest.jpg","ocean.jpg","rain.jpg","sunset.jpg"]
let currentIndex =0

const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const image = document.getElementById("image")


prevButton.addEventListener("click",()=>{

    //0 = (0-1+4)%4
    //2 = (2-1+4)%4 5 %4 = 1
    currentIndex = (currentIndex -1 + images.length) % images.length
    image.src = "../images/"+images[currentIndex]



})
nextButton.addEventListener("click",()=>{
    //0 = (0+1)%4 1 %4 = 1
    currentIndex = (currentIndex +1) % images.length
    image.src = "../images/"+images[currentIndex]
})