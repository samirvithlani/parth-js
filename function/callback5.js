const jpgHandler = (options) => {

    return options.fName + " uploading..."
}
const pngHandler = (options) => {

    return options.fName + " "  +"uploading..."
}

const upload = (file, cb) => {

    //jpg handle...
    //png handle...
    //word handle...

    return cb({ fName: file, size: 1000})


}

var fileName = "abc.jpg"
var flag =""
if (fileName.endsWith(".jpg")) {

    flag = upload(fileName, jpgHandler)
}
else if (fileName.endsWith(".png")) {
    
        flag = upload(fileName, pngHandler)
}

console.log(flag)