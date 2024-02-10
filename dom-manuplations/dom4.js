const getValue = () => {

    const input = document.getElementById('name');
    //console.log(input.value);
    var nameErr = document.getElementById('nameErr');
    if(input.value.length<3){
        nameErr.innerHTML = "Name must be at least 3 characters";
        //input.style.border = "1px solid red";
        input.style.outline = "2px solid red";
    }
    else{
        nameErr.innerHTML = "";
        input.style.outline = "1px solid green";
    }
    
}