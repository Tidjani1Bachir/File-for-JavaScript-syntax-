/* let names =function (...names) {

 return `String ${names.map(name => `[${name}]`).join(" , ")} => Done !`;
}
console.log(names("bachir","youcef","za3im",)); */

/* let names = (...names) => `String ${names.map(name => `[${name}]`).join(" , ")} => Done !`;

console.log(names("bachir","youcef","za3im",)); */

/*<------------------------------------------------------------------------------------------------->  */

/* let myNumbers =[20,50,10,60];

let calc = (one,two,...nums) => one +two + nums.reduce((acc,num) => acc + num ,0);

console.log(calc(10,myNumbers[0],myNumbers[1])); */

let myNumbers =[20,50,10,60];

let calc = function calculat (one,two,...nums) { return one +two + nums.reduce((acc,num) => acc + num ,0);}

console.log(calc(10,myNumbers[0],myNumbers[1]));

