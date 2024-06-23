// /*⁡⁢⁣⁢Start Assignement⁡ 1 */

/* ⁡⁢⁣⁣open link with spesific content and spesific classe name⁡  */

// const linkToOpen =document.querySelectorAll("a");

// const linkArray =Array.from(linkToOpen);
// /* Getting set of elements siblinks with the same tag name using array methode ForEach  */

// linkArray.forEach(function(element){
//     if (element.classList.contains("open") && element.textContent === "Elzero") {
//         console.log(element)
//     }
// });

// /* for(const linkToOpen of linkToOpen){
//     const textContent = linkToOpen.textContent;
//     const classList = linkToOpen.classList;

//     if (classList.contains("open") && textContent === "Elzero") {
//         console.log(linkToOpen);
//     }

// } */

// /*⁡⁢⁣⁢End Assignement⁡ 1 */


/* ⁡⁢⁣⁣Add class input to an element (current element)+ remove class input to an (current element) element
and display each class he has when we add and when we remove and when there is no class display no class to show⁡
*/
// /*⁡⁢⁣⁢Start Assignement⁡ 2 */


/*
in this assignementwe will try to pur classes to an element with current-element class and show them as inner elements in Div with Noclass To Show with style and when deleating the classes from the main element the classes that are shown are deleted ass well
*/

// /* Start Form main container */
// let form = document.querySelector("form");
// form.style.cssText = "display:flex;flex-wrap:wrap;  justify-content:center;align-items:center;width:800px; margin:0 auto;"

// /* End Form main container */

// /* Start Add Classes Input Field */

// let addClasses = document.querySelector('[value="Add Classes"]');
// addClasses.style.cssText = "width:300px;padding:10px 10px; color:gray; margin-right:20px;"

// /* End Add Classes Input Field */


// /* Start Remove Classes Input Field */

// let removeClasses = document.querySelector('[value="Remove Classes"]');
// removeClasses.style.cssText = "width:300px;padding:10px 10px; color:gray;"

// /* End Remove Classes Input Field */


// /* Start Current Element Div  */
// let currentElement = document.querySelector(".curentElement");
// currentElement.style.cssText = " width:630px; display:flex;justify-content:center;align-items:center; background-color:#f1f1f1; padding:20px; margin-top:20px;"

// /* End Current Element Div  */


// /* Start Current Elements Classe List Element Div  */
// let currentElementClassList = document.querySelector(".curent-element-class-list");
// currentElementClassList.style.cssText = " width:670px; display:flex;justify-content:center;align-items:center; background-color:#f1f1f1; height:100px; margin-top:20px;"

// /* Span wher to put the text Curent Element Class Lists
//  */
// let Span = document.querySelector(" .curent-element-class-list > span");
// Span.style.cssText = "transform:translate(-90%,-150%); font-weight:bold;"

// /* Div where to put The classes to show */
// let NoClassToShowDiv = document.querySelector(".curent-element-class-list > div");
// NoClassToShowDiv.style.cssText = "transform:translate(-80%,-10%);"
// /* End Current Elements Classe List Element Div  */


// addClasses.onblur = function () {

//   NoClassToShowDiv.innerHTML = "";
//   let classes = addClasses.value.split(" "); /* Array */
//   classes.forEach(element => {
//     currentElementClassList.classList.toggle(element)
//     let textelement = document.createTextNode(element + " ")

//     let innerDivOrange = document.createElement("div")
//     innerDivOrange.appendChild(textelement)
//     innerDivOrange.style.cssText = "width:50px;height:40px;background-color:orange; margin-right:10px;"
//     innerDivOrange.className = "Orange"
//     NoClassToShowDiv.style.cssText = "display:flex;"
//     NoClassToShowDiv.appendChild(innerDivOrange)
//   });
//   /* console.log(currentElementClassList); */
// }

// removeClasses.addEventListener("blur", function () {
//   // Get the value of the input field
//   const values = removeClasses.value.split(" ");
//   let i = 0;
//   // Get all the child elements of the div with the class NoHold
//   const children = NoClassToShowDiv.children;
//   values.forEach(function (element) {
//     // Loop through the child elements
//     for (const child of children) {

//       if (child.innerHTML.includes(element)) {
//         // Remove the child element
//         NoClassToShowDiv.removeChild(child);
//       }
//     }
//   });

// });

// /*⁡⁢⁣⁢End Assignement⁡ 2 */

//  /*⁡⁢⁣⁢Start Assignement⁡ 3 */

/* ⁡⁢⁣⁣Remove an element and add two elements one before and other after to another element --> here div⁡ */

// let ourElement = document.querySelector(".our-element");

// let paragraphToDelete = document.querySelector("p");

// ourElement.nextElementSibling.remove(); /* Delete The Paragraph  */

// /* Start Adding Previous Element of our-elemnet*/
// let previousElement = ourElement.previousElementSibling;
// previousElement =document.createElement("div");

// ourElement.parentNode.insertBefore(previousElement, ourElement);

// previousElement.classList.add("start");
// previousElement.setAttribute("title", "Start Element");
// previousElement.setAttribute("data-value", "Start ");
// previousElement.textContent ="Start";

// /* End Adding Previous Element of our-elemnet*/


// /* Start Adding Next Element of our-elemnet*/
// let nextElement = ourElement.nextElementSibling;
// nextElement =document.createElement("div");

// ourElement.parentNode.insertBefore(nextElement, ourElement.nextSibling);

// nextElement.classList.add("end");
// nextElement.setAttribute("title", "end Element");
// nextElement.setAttribute("data-value", "End");
// nextElement.textContent ="End";

// /* End Adding Next Element of our-elemnet*/


//  /*⁡⁢⁣⁢End Assignement⁡ 3 */

//  /*⁡⁢⁣⁢Start Assignement⁡ 4 */
/*


*/

//  let div = document.querySelector("div");


//  div.firstElementChild.remove();
//  let divContent = div.innerText
//  console.log(divContent);

//  /*⁡⁢⁣⁢End Assignement⁡ 4 */

// /*⁡⁢⁣⁢⁡⁢⁣⁢Start Assignement⁡⁡ 5 */

// let div=document.querySelector("div");
// div.onclick =function() {
// console.log(div.tagName)
// }
// let span=document.querySelector("Span");
// span.onclick =function() {
// console.log(span.tagName)
// }
// let p=document.querySelector("p");
// p.onclick =function() {
// console.log(p.tagName)
// }
// let article=document.querySelector("article");
// article.onclick =function() {
// console.log(article.tagName)
// }
// let section=document.querySelector("section");
// section.onclick =function() {
// console.log(section.tagName)
// }

//  /*⁡⁢⁣⁢End Assignement⁡ 5 */
