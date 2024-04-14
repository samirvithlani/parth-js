const getApiDemo = () => {


    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://node5.onrender.com/user/user",true); // true for async
    xhr.send();
    xhr.onload = ()=>{
        //console.log(xhr.responseText)
        var data = JSON.parse(xhr.responseText);
        console.log(data);
    }
}

//getApiDemo();

const postApiDemo = () => {

    var xhr = new XMLHttpRequest();
    xhr.open("POST","https://node5.onrender.com/user/user",true); // true for async
    var data = {
        name:"aashiq",
        age:22,
        email:"aashiq@gmail.com",
        isActive:true
        
    }

    var jsonData = JSON.stringify(data);
    console.log("stirng.......",jsonData);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(jsonData);
    xhr.onload = ()=>{
        console.log(xhr.responseText);
    }




}
postApiDemo();