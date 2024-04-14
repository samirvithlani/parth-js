const loadDoc = () => {


    var xhr = new XMLHttpRequest();
    xhr.open("GET","./demo.txt",true); // true for async
    xhr.send();
    xhr.onload = function(){
        console.log(xhr.responseText);
        document.getElementById("txt").innerHTML = xhr.responseText;
    }


}


const readJson = () => {

var xhr = new XMLHttpRequest();
xhr.open("GET","./user.json",true); // true for async
xhr.send();
xhr.onload = ()=>{
    console.log(xhr.responseText);
    var users = JSON.parse(xhr.responseText)
    console.log(users);
}


}

readJson();

const sendDatatoFile = () => {

    var xhr = new XMLHttpRequest();
    xhr.open("POST","./demo1.json",true); // true for async
    xhr.setRequestHeader("Content-Type","application/json");
    var data = {
        "name":"John",
        "age":30
    }
    xhr.send(JSON.stringify(data));
    xhr.onload = ()=>{
        console.log(xhr.responseText);
    }

}
sendDatatoFile();