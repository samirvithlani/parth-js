const pdfHandler = (options)=>{

        console.log("pdf handler..",options)
        return options.fName 

}

const wordHandler = (options)=>{
 
        console.log("word handler..",options)
        return options.fName + ".doc"
}


const upload = (file,cb)=>{

    //abc.pdf
    var data = cb({fName:file,size:1000})
    console.log("uploading...",data)
}

var fileName ="abc.pdf"

if(fileName.endsWith(".pdf")){

        upload(fileName,pdfHandler)
}
else if(fileName.endsWith(".doc")){

        upload(fileName,wordHandler)
}