function submitHandler(event) {
  event.preventDefault(); // Prevent the default form submission
  console.log("submitHandler");

  const error = document.getElementById("error");
  const name = document.getElementById("name");
  const email = document.getElementById("email");


  console.log(name.value);
  console.log(email.value);
  console.log(name.value.length);

  if (name.value.length <= 0 || email.value.length <= 0) {
    error.innerHTML = "Please fill out all fields";
  } else {
    error.innerHTML = "";
    var user = {
      name: name.value,
      email: email.value,
    };
    console.log(user);

    const data = document.getElementById("data");
    //data.innerHTML = user
    data.innerHTML = JSON.stringify(user);
  }
  // {"name":""}

  // var struser = JSON.stringify(user)
  // console.log(struser[0]);
}


function printName(){

    const printName = document.getElementById("printName");
    const name = document.getElementById("name");
    printName.innerHTML = name.value;
}