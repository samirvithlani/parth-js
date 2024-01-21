const science = (name)=>{

    console.log("you are in science stream" , name);
}
const commerce = (name)=>{
    console.log("you are in commerce stream" , name);
}
const arts = (name)=>{

    console.log("you are in arts stream" , name);
}



const admission = (name , cb)=>{

    cb(name)

}
admission("ram",science)