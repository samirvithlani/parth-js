var lang = ["hindi", "english", "marathi", "gujarati", "tamil"];

console.log(lang);
//lang.splice(1,1) //it will goto 1st index and remove 1 element
//lang.splice(3,0,"telugu") //it will goto 3rd index and add telugu and remove 0 element
//lang.splice(3,0,"telugu","kannada") //it will goto 3rd index and add telugu and remove 0 element
lang.splice(3,1,"telugu","kannada") //it will goto 3rd index and add telugu and remove 1 element
console.log(lang);