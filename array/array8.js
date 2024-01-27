var lang = ["c", "c++", "java", "python","php","javascript"];


// const deleteLang = (langname) => {


//     lang = lang.filter((lang)=>{
//         return lang!=langname;
//     })

//     return lang;

// }


const deleteLang = (langname) => {


    return lang.filter((lang)=>lang!=langname)
}
var x = deleteLang("php");
console.log(x); 