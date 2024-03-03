//java script Date is class

var date  = new Date();
//var date = new Date(2023,1,14,10,30,0,0);
//var date = new Date("2023-02-14T10:30:00");
//var date = new Date(2023,1,14);
//var date = new Date(0) // 0 is mills
console.log(date);

console.log(date.getFullYear());
console.log("Month ->",date.getMonth());
console.log("Date ->",date.getDate());
console.log("Day ->",date.getDay());
console.log("Hours ->",date.getHours());
console.log("Minutes ->",date.getMinutes());
console.log("Seconds ->",date.getSeconds());
console.log("Mills ->",date.getMilliseconds());
console.log("Time ->",date.getTime());
console.log("Timezone ->",date.getTimezoneOffset());
console.log("UTC ->",date.getUTCDate());
console.log("UTC ->",date.getUTCDay());
console.log("UTC ->",date.getUTCFullYear());
console.log("UTC ->",date.getUTCHours());
console.log("UTC ->",date.getUTCMilliseconds());
console.log("UTC ->",date.getUTCMinutes());
console.log("UTC ->",date.getUTCMonth());
console.log("UTC ->",date.getUTCSeconds());


//set
var date2 = new Date();
date2.setFullYear(2023);
date2.setMonth(1);
date2.setDate(14);
date2.setHours(10);
date2.setMinutes(30);
date2.setSeconds(0);
date2.setMilliseconds(0);

console.log(date2);




