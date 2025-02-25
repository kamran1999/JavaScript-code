// Singleton
// object.create

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "kamran",
    "full name": "kamran khan",
    [mySym]: "mykey1",
    age: 24,
    location: "delhi",
    email: "kamran@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "kamran@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "kamran@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


