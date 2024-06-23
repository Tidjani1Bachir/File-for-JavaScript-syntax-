// /* ⁡⁢⁣⁢Start Assignement⁡ 1 */

/*

⁡⁢⁣⁣input inside promet ---> 10-15

10
11
12
13
14
15⁡

*/
// const numversToPrint = prompt("Print Number From – To","exemple:15-20");

// const numbersString = numversToPrint.replace("-", " ").split(" ");

// const numbers = [+numbersString[0], +numbersString[1]];

// console.log(numbers);
// if(numbers[0]<=numbers[1])
// {for (let i = numbers[0]; i <= numbers[1]; i++) {
//     let element = document.createElement("div");
//     element.innerHTML = `${i}`;
//     document.body.appendChild(element);
// }
// }else {
//     for (let j = numbers[1]; j <= numbers[0]; j++) {
//         let element = document.createElement("div");
//         element.innerHTML = `${j}`;
//         document.body.appendChild(element);
//     }
// }
// /* ⁡⁢⁣⁢End Assignement 1⁡ */

/*⁡⁢⁣⁢Start Assignement 2⁡ */

/*

⁡⁢⁣⁣create costum propmet with css ⁡⁢⁣⁣opend after spesiic time and delete it after clicking on X⁡⁡⁡

*/
// setTimeout(function(){

// },5000)

// const popup = document.getElementById("popup");
// const overlay= document.querySelector(".overlay")
// const closeButton = document.getElementById("close");

// closeButton.addEventListener("click", () => {
//   popup.style.display = "none";
//   overlay.style.display = "none";
// });

// // Open the popup when the user clicks on a button
// function openPopup() {
//     popup.style.display = "block";
//     overlay.style.display = "block";
//   }
//   setTimeout(openPopup, 2000);
// /*⁡⁢⁣⁢End Assignement 2⁡ */

// /*⁡⁢⁣⁢Start Assignement 3⁡ */

/*
⁡⁢⁣⁣counter that stops afterhitting 0 inside di that worcks automatickly usin contdown methode⁡
*/

// let div =document.querySelector("div");

// function countdown() {
// div.innerHTML-=1;
// if(div.innerHTML === "0") {
//     clearInterval(counter);
// }
// }
// let counter =setInterval(countdown,1000);

// /* ⁡⁢⁣⁢End Assignement⁡ 3⁡ */


// /*⁡⁢⁣⁢Start Assignement 4⁡⁡⁡ */

/*
⁡⁢⁣⁣same as 3 but when th counter hits 0 go to a web page⁡
*/
// let div =document.querySelector("div");
// function countdown() {
// div.innerHTML-=1;
// if(div.innerHTML === "0") {
//     location.href ="https://Elzero.org"
// }
// }
// let counter =setInterval(countdown,1000);
// /*⁡⁢⁣⁢End Assignement 4⁡⁡ */

// /*⁡⁢⁣⁢Start Assignement 5⁡ */

/*
⁡⁢⁣⁣pop up inside it a web page smalled after 5 secondes from openning the w<eb page⁡
*/

// let div =document.querySelector("div");
// function countdown() {
// div.innerHTML-=1;
// if(div.innerHTML === "5") {
//     window.open("https://Elzero.org", "_blank", "width=400,height=400,left=50%,top=50%");
// }
// if(div.innerHTML === "0") {
//     clearInterval(counter);
// }
// }
// let counter =setInterval(countdown,1000);
// /*⁡⁢⁣⁢End Assignement 5⁡ */

