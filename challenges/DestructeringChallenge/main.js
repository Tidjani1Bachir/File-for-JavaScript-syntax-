let chosen = 1;

let myFriends = [
 {title:"osama",age:39,available:true,skills:["HTML","CSS"]},
 {title:"osama",age:25,available:false,skills:["Python","Django"]},
 {title:"Sayed",age:33,available:true,skills:["PHP","Laravel"]}

]

if(chosen === 1) {
    [{title:name,age:age,available:available,skills:[one,two]},,] = myFriends
console.log(`${name}`);
console.log(`${age}`);
if(available === true)
{console.log(`available`)}
else
{console.log(`Not available`)}

console.log(`${one}`);
console.log(`${two}`);

}else if(chosen === 2 ) {
    [,{title:name,age:age,available:available,skills:[one,two]},] = myFriends
console.log(`${name}`);
console.log(`${age}`);
if(available === true)
{console.log(`available`)}
else
{console.log(`Not available`)}

console.log(`${one}`);
console.log(`${two}`)
}else if(chosen === 3) {
    [,,{title:name,age:age,available:available,skills:[one,two]}] = myFriends
console.log(`${name}`);
console.log(`${age}`);
if(available === true)
{console.log(`available`)}
else
{console.log(`Not available`)}

console.log(`${one}`);
console.log(`${two}`);
}else
console.log("error")