// Date and Time

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreateDate = new Date(2025, 0, 20)
//console.log(myCreateDate.toDateString());

//let myCreateDate = new Date(2025, 0, 20, 1, 15)
//console.log(myCreateDate.toLocaleString());

//let myCreateDate = new Date("2025-02-20")
let myCreateDate = new Date("02-20-2025")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long",
    
})