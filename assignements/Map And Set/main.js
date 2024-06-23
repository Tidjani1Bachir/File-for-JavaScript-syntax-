/* ⁡⁢⁣⁢Start Assinment 1⁡ */
console.log("%cStart Assinment 1⁡","color:red;");

let setOfNumbers =new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

let Set1 =setOfNumbers.keys()
console.log(`Set(${setOfNumbers.size}) {${Set1.next().value},${Set1.next().value},${Set1.next().value}}`);

console.log(setOfNumbers.size -1)

console.log("%cEnd Assinment 1⁡","color:red;");
/* ⁡⁢⁣⁢End Assinment 1⁡ */
console.log("#".repeat(30));

/* ⁡⁢⁣⁢Start Assinment 2⁡ */
console.log("%cStart Assinment 2⁡","color:red;");
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(myFriends.copyWithin(0,1,2).copyWithin(1,4,5).copyWithin(2,5).slice(0,4))

console.log("%cEnd Assinment 2⁡","color:red;");
/* ⁡⁢⁣⁢End Assinment 2⁡ */

/* ⁡⁢⁣⁢Start Assinment 3⁡ */
console.log("%cStart Assinment 3⁡","color:red;");

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };

  const map = new Map(Object.entries(myInfo));

  console.log(map)
  console.log(map.size)

  let myInfoArray = Object.keys(myInfo);
  let check = myInfoArray.some((element) =>
  element === "role"
  )

  console.log(check);
  console.log("%cEnd Assinment 3⁡","color:red;");
/* ⁡⁢⁣⁢End Assinment 3⁡ */
console.log("%cStart Assinment 4⁡","color:red;");

/* ⁡⁢⁣⁢Start Assinment 4⁡⁡ */
let theNumber = 100020003000;

console.log(+`${new Set([...`${theNumber}`].filter((element) => element !== "0" ).map((ele) => +ele)).keys().next().value}${++new Set([...`${theNumber}`].filter((element) => element !== "0" ).map((ele) => +ele)).keys().next().value}${++new Set([...`${theNumber}`].filter((element) => element !== "0" ).map((ele) => +ele)).keys().next().value+new Set([...`${theNumber}`].filter((element) => element !== "0" ).map((ele) => +ele)).keys().next().value}`)

console.log("%cend Assinment 4⁡","color:red;");

console.log("%c Start Assinment 5⁡","color:red;");

/* ⁡⁢⁣⁢Start Assinement 5⁡ */
let theName = "Elzero";
console.log(theName.split(""));
console.log([...theName]);
console.log(
    Array.from(theName, function (n) {
      return n ;
     })
     );
console.log(Array.from(new Set(theName)))

let newArray =[]
for(let i= 0 ;i< theName.length; i++) {
newArray.push(theName[i]);
}

console.log(newArray);


/* ⁡⁢⁣⁢End Assinement 5⁡ */
console.log("%c End Assinment 5⁡","color:red;");

console.log("%c Start Assinment 6⁡","color:red;");

/* ⁡⁢⁣⁢Start Assinement 5⁡ */
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let counter =0 ;

//Creats An array with onlyStrings
const newArray2= chars.filter(function(element,Index,Array) {
  return isNaN(element)

});
// counter the number of eleme,ts of type number in thegiving array
for(let i=0;i<chars.length;i++) {
if( !isNaN(chars[i])) {
  counter++;
}
}

console.log(newArray2)

console.log(counter)

//creats an array of string contains onlythe number os numbersof Strings Elements contains counter number of elements the giving table
let newArray3 = []
for(let i=0;i<counter;i++) {

 newArray3.push(newArray2[i])
}
console.log(newArray3)

// push the array that contains the counter elements of Strings in the beginnig of the agiving array

const concatenatedArray = newArray3.concat(chars);

console.log(concatenatedArray) // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// filter theconcatenated array from number
const FinalOutput= concatenatedArray.filter(function(element,Index,Array) {
  return isNaN(element)

});
// the final output
console.log(FinalOutput);

/* ⁡⁢⁣⁢End Assinement 5⁡ */

console.log("%c End Assinment 6⁡","color:red;");

console.log("%c Start Assinment 7⁡","color:red;");

/* ⁡⁢⁣⁢Start Assingement 7⁡ */
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

const concatenatedArray2 = numsOne.concat(numsTwo);

console.log(concatenatedArray2);

// for(let i =0;i<numsTwo.length;i++) {
// numsOne.push(numsTwo[i]);
// }

// console.log(numsOne)

let [a,b,c,d,e,f] =[...numsOne,...numsTwo]
console.log([a,b,c,d,e,f])


/* ⁡⁢⁣⁢End Assingement 7⁡ */

console.log("%c Start Assinment 8","color:red;");




