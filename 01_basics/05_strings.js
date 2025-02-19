const name = "kamran"
const repoCount = 5

 //console.log(name + repoCount + " value")    => this is old syntex 

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this is new syntex
 
 const gameName = new String('kamran-cc-com')

 console.log(gameName[0]);
 console.log(gameName.__proto__);


 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('m'));
 
 
 const newString = gameName.substring(0, 4)
 console.log(newString);

 const anotherString = gameName.slice(-6, 4)
 console.log(anotherString);

 const newStringOne = "  kamran  "
 console.log(newStringOne);
 console.log(newStringOne.trim());
 
 const url = "https://kamran.com/kamran%20khan"

 console.log(url.replace('%20', '-'));
 console.log(url.includes('khan'));
 
 console.log(gameName.split('-'));
 
 
 
 
 
 