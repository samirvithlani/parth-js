function changeColor(){


    var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
    //generate random index
                    //7/3 = 2

    var randomIndex = Math.floor(Math.random() * colors.length);
    //math.floor will give you integer value
    //math.random will give you random number between 0 and 1
    //console.log("random index...",randomIndex);
    console.log("color...",colors[randomIndex]);

    var mydiv = document.getElementById("mydiv");
    mydiv.style.backgroundColor = colors[randomIndex];

}