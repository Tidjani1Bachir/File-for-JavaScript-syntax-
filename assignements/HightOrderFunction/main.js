/* First Challenge */

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result1 =mix.map((element) =>
isNaN(element) ? element : ""
).reduce((acc,current) => `${acc}${current}`);

console.log(result1); /* Elzero */

console.log("#############################");


/* Seconde Challenge */

let myString = "EElllzzzzzzzeroo";

let result2 =myString.split("").filter((element,index,arr) =>
arr[index] === arr[index + 1] ? arr[index] ="": element
).join("")

console.log(result2); /* Elzero */

console.log("#############################");
/* Third Challenge */


let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result3 =myArray.reduce(function(acc,current,arr)
{
     acc.push(current);
    return acc;


},[]).join("").replace(",","");

console.log(result3); /* Elzero */

console.log("#############################");
/* Fourth Challenge */

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result4 =numsAndStrings.filter((element) =>
isNaN(element) ? "":element
).map((element) => -element)

console.log(result4);/* array with -element */

/* Fifth Challenge */

let nums = [2, 12, 11, 5, 10, 1, 99];

let result5 = nums.reduce(function(acc,current)
{

    if(current % 2 === 0) return acc * current
 else return acc + current

},1);

console.log(result5); /*  500 */



