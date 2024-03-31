const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "John",
        },
        {
          id: 2,
          name: "Jane",
        },
      ]);
    }, 3000);
  });
};



// var userObj;
// getAllUsers().then((users)=>{
//     console.log("Users...",users)
//     userObj = users
// })

// console.log("User Object...",userObj)
// console.log(userObj.length)


async function printUsers(){


    console.log("printing started...")
    var userObj = await getAllUsers()
    console.log("User Object...",userObj)
    console.log("printing ended...")


}

printUsers()