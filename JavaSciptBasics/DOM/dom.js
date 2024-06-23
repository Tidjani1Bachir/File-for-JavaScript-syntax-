
// /*
// Introduction of Dom
// */
// let myIdElement =document.getElementById("my-div");
// let myTagElements =document.getElementsByTagName("p");

// let myClassElement =document.getElementsByClassName("my-span");

// let myQueryElement =document.querySelector(".special"); /* all type of selectors including advanced selectors  */ /* selects the first element with the specific class */

// let myQueryAllElements =document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements);
// console.log(myTagElements[1]);
// myTagElements[1].innerHTML = "Testing";
// console.log(myClassElement);
// console.log(myClassElement[1]);
// console.log(`#################################`);
// console.log(myQueryElement);
// console.log(myQueryAllElements[1]);

// console.log(document.title);

// console.log(document.body);

// console.log(document.forms);

// console.log(document.forms[0].one.value );

// console.log(document.links[1].href);

/* console.log(`⁡⁢⁣⁢##################################################⁡`); */

// /*
// Dom [Get / Set Elements Content And Attributes]
//   - innerHTML
//   - textContent
//   - Change Attributes Directly
//   - Change Attributes with Methodes
//   --- getAttribute
//   --- setAttribute

// */

// let myElement2 =document.querySelector(".js");
// console.log(myElement2.innerHTML); /* the html tag content  */

// console.log(myElement2.textContent); /* Takes Only the Text pure text  */

// myElement2.innerHTML ="Text From<span>Main.js</span>"
// myElement2.textContent ="Text From<span>Main.js</span>"

// document.images[0].src = "https//google.com";
// document.images[0].alt = "alternate text";
// document.images[0].title = "picture";
// document.images[0].id = "picture";
// document.images[0].className = "img";

// let mylink =document.querySelector(".link");

// console.log(mylink.getAttribute("class"));
// console.log(mylink.getAttribute("href"));

// mylink.setAttribute("href","https://twitter.com")
// mylink.setAttribute("title","twitter");

// console.log(`⁡⁢⁣⁢##################################################⁡`);

// /*

// Dom [Check Attributes]
//   - Element.attribute
//   - Element.hasattribute
//   - Element.removeattribute

// */

// console.log(document.getElementsByTagName("p")[0].attributes) /* nodeValue
// name
//  */

// let myP = document.getElementsByTagName("p")[0];

// if(myP.hasAttribute("data-src")) {
//   if(myP.getAttribute("data-src") === "") {

//     myP.removeAttribute("data-src");
//   }else {
// myP.setAttribute("data-src","new value")
//   }
// }else {
//   console.log("Not Found");

// }
// if (myP.hasAttributes()) {
// console.log(`Has Attributes`);
// }

// if (document.getElementsByTagName("div")[1].hasAttributes()) {
// console.log(`Has Attributes`);
// }else {
// console.log(`Div Has No Attributes `);
// }

/* console.log(`⁡⁢⁣⁢##################################################⁡`); */

// /*
// Dom [Create Elements]
//   - createElement
//   - createComment
//   - createTextNode
//   - createAttribute
//   - appendChild
// */

// let myElement =document.createElement("div")
// let myAttr =document.createAttribute("data-custom");
// let myText =document.createTextNode("Product One");
// /* text inside an elemnt like div */

// let myComment =document.createComment("This Is Div");

// myElement.className ="product";
// myElement.setAttributeNode(myAttr); /* Add empty Attribute u can later add content to it */
// myElement.setAttribute("data-test","Testing");

// // Append Comment To Elememnt
// myElement.appendChild(myComment);

// // Append Text To Elememnt

// myElement.appendChild(myText)

// // Append Element To Body

// document.body.appendChild(myElement)

/*⁡⁢⁣⁢############################################################################################⁡*/

// /*
// DOM [Create Elements]
//  - Practice Product With Heading And Paragraphe
// - ho w tocreate elements and other elements insides it using js
// */
// for(let i=1;i<=100;i++) {

//   let myMainProduct =document.createElement("div");
//   let myHeading =document.createElement("h2");
//   let myParagraph =document.createElement("p");

//   myMainProduct.className="product"

//   let myHeadingText =document.createTextNode(`Product Title ${i}`);
//   let myParagraphText =document.createTextNode("Product Description");

//   // add heading text
//   myHeading.appendChild(myHeadingText);

//   // add heading to Main Element
//   myMainProduct.appendChild(myHeading);

//   // Add Paragraph text
//   myParagraph.appendChild(myParagraphText);

//   // add P to Main Element
//   myMainProduct.appendChild(myParagraph);

// myHeading.style="color:red;"
// myParagraph.style="color:green;"
//   document.body.appendChild(myMainProduct);
// }

/*⁡⁢⁣⁢############################################################################################⁡*/

// /*

// /*
// DOM [Deal With Childrens]

//  - children
//  - childNodes
//  - firstChild
//  - lastChild
//  - firstElementChild
//  - lastElementChild
// */

// let myElement =document.querySelector("div");

// console.log(myElement);

// console.log(myElement.children); /* all Html Elements inside the father element */
// console.log(myElement.children[0]);

// console.log(myElement.childNodes); /* everything element text comment spaces  */
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);/* retruns the first thing inside element */
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

/*⁡⁢⁣⁢############################################################################################⁡*/

/*
DOM[Events]

- Use Events On Html
- Use Events On Js
--- onclick --> left click
--- oncontextmenu --> right click
--- onmouseenter --> hover
--- onmouseleave --> leave  hover

--- onload    --> Page Reloaded
--- onscroll  -->when i'm scrolling
--- onresize  -->

Form events
--- onfocus --> focus on input
--- onblur  --> go out of the input field
--- onsubmit-->
*/

/*⁡⁢⁣⁢############################################################################################⁡*/

/*
DOM [Events] Practise
  - Validate Form practice
  - Prevent Default

*/

// let userInput = document.querySelector("[name='username']")
// let userAge = document.querySelector("[name='age']")



// document.forms[0].onsubmit = function (event) {
//     let userValid = false;
//     let AgeValid = false;
//     /* Validate the userName */
//     if (userInput.value !== "" && userInput.value.lenth <= 10) {
//         userValid = true;
//     }

//     /* Validate the user Age */

//     if (userAge.value !== "") {
//         AgeValid = true;
//     }

//     /* Prevent the Default behaviour if one of the input is not filed correctly */

//     if (userValid === false && AgeValid === false) {
//         event.preventDefault();
//     }
// };

/*
DOM [Events Simulation] automaticly
 - click
 - focus
 - blur
 */

/* let one =document.querySelector(".one");
let two =document.querySelector(".two");

window.onload = function () {
two.focus();
}
one.onblur =function () {
document.links[0].click();
} */

// /*
// DOM [Class List]
//  - classList
//  - length
//  - contains
//  - item(index)
//  - add
//  - remove
//  - toggle /* if exists remove if not add classe of course */


// let element =document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("bachir"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));

// element.onclick = function () {
// element.classList.toggle("osama")
// }

/*⁡⁢⁣⁢ <-------------------------------------------------------------------------------------> ⁡*/

// /*
// DOM [css]
//  - style
//  - cssText
//  - removeProperty(propertyName) [inline,Stylesheet]
//  - setProperty(propertyName,value,priority)
//  */

// let element =document.getElementById("my-div");

// /* inline-style */
// element.style.color ="#ddd";

// element.style.backgroundColor ="green";

// /* this methode ovveride all the inline css styles */

// element.style.cssText = "display:flex; justify-content:center; font-weight:bold; color:yellow;"
// element.style.removeProperty("color")
// element.style.setProperty("opacity","0.6","important")


// document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
// document.styleSheets[0].cssRules[0].style.setProperty("background-color","red");

/*⁡⁢⁣⁢ <-------------------------------------------------------------------------------------> ⁡*/

/*
DOM [Deal With Elements]
 - before [element || String ]
 - after [element || String ]
 - append [element || String ]
 - prepend [element || String ]
 - remove
 */

 /* let element =document.getElementById("my-div");

 let createdP =document.createElement("p");

 element.before(createdP); */

 /*⁡⁢⁣⁢ <------------------------------------------------------------------------------------->⁡ */

/*
DOM [Traversing]

 - nextSibling
 - previousSibling
 - nextElementSibling
 - previousElementSibling
 - parentElement

*/

// let span =document.querySelector(".two")

// console.log(span.nextSibling);

// /* console.log(span.nextElementSibling.remove()); */
// span.onclick =function() {
//     span.parentElement.remove();
// }

/* ⁡⁢⁣⁢<------------------------------------------------------------------------------------->⁡ */

// /*
// DOM[cloning]
//  - cloneNode(deep)
// */

// let myP =document.querySelector("p").cloneNode(true);
// let myDiv =document.querySelector("div");

// myP.id =`${myP.id}-clone`;

// myDiv.appendChild(myP)

/* ⁡⁢⁣⁢<-------------------------------------------------------------------------------------> ⁡*/

/*

// DOM [Add Event Listener]
//  - addEventListener
//  - Use Without On
//  - Attach Multiple Events
//  - Error Test

// Search
// - Capture & Bubbling JavaScript
// - removeEventListener

// */

//  let myP =document.querySelector("p");
// // myP.onclick =one;
// // myP.onclick =two;

// // /*
// // here the two function will ovveride the one function
// // */
// //   function one(){
// //     console.log("Messege From OnClick 1");
// //   };

// //   function two(){
// //     console.log("Messege From OnClick 2");
// //   };


// //   window.onload = "string"; /* no error wil be displayed even thought u need to spesifie a function for the event of object  */


// //   /*
// //   we use addEventListner when we want that the seconde function don't ovveride the first function many events on onlyine element
// //   */
// //   myP.addEventListener("click",function() {
// //     console.log("Messege From OnClick 1 Event ")
// //   });
// //   myP.addEventListener("click",one);
// //   myP.addEventListener("click",two);

// //   // myP.addEventListener("click","bachir") error  /* now this will gives us an error not like window.onload   */

// myP.onclick =function () {
//   let newP= myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// }

// let cloned =document.querySelector(".clone");

// // cloned.onclick =function () { /* here the element with class clone does not exists so that's why we will have an error so we need to use addEventlistener */
// // console.log("Iam Cloned");
// // }

// document.addEventListener("click",function(event) {
// if(event.target.className === "clone") {
// console.log("Iam Cloned");
// }
// })

