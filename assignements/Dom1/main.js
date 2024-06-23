/* Start Assignment 1 */

/*Sellecting Html Elements Using Js Ith 15 Different Methodes  */


// let element1 = document.querySelector("#elzero");
// let element2 = document.querySelector(".element");
// let element3 = document.querySelector("[name=js]");
// let element4 = document.querySelector("div");

// let element5 = document.querySelectorAll("#elzero")[0];
// let element6 = document.querySelectorAll(".element")[0];
// let element7 = document.querySelectorAll("[name=js]")[0];
// let element8 = document.querySelectorAll("div")[0];

// let element9 = document.getElementById("elzero");

// let element10 = document.getElementsByClassName("element");

// let element11 = document.getElementsByTagName("div");
// let element12 = document.body.children[0];

// let element13 = document.body.firstElementChild;
// let element14 = document.body.firstChild;
// let element15 = document.body.childNodes[0];


// console.log(element1);
// console.log(element2);
// console.log(element3);
// console.log(element4);
// console.log(element5);
// console.log(element6);
// console.log(element7);
// console.log(element8);
// console.log(element9);
// console.log(element10);
// console.log(element11);
// console.log(element12);
// console.log(element13);
// console.log(element14);

// /* console.log(element1); */

// /* End Assignment 1 */


// /* Start Assignment 2 */

/*⁡⁢⁣⁢Change the content of an attribute⁡  */

// let images =document.querySelectorAll('[decoding="async"]'); /* selexts All the element with a spesific class --> Array of eleemnts */
// for(let i=0;i< images.length;i++){
//     images[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     images[i].alt ="Elzero Logo";
// }

// /* End Assignment 2 */


//  /* Start Assignment 3 */

/* ⁡⁢⁣⁢USD To egpt transform ---> currency transformer⁡  */

//  let input = document.querySelector('[type="number"]');

//  input.addEventListener("paste", handlePaste);
//  input.addEventListener("keyup", function(event) {

//      let inputValue = input.value;
//      let egyptPound = inputValue * 15.6;

//      let result = document.querySelector(".result");
//      result.textContent = `${inputValue} USD Dollar = ${egyptPound} Egyptian Pound`;

//  });

//  function handlePaste() {
//    let pastedText = event.clipboardData.getData("text/plain");

//    if (/^\d+$/.test(pastedText)) {
//  let PastedtextLenght = pastedText.toString().length/2;

// let number = 10

// for(let i=1;i<=PastedtextLenght;i++) {
// number*=number
// }
// let number2 =pastedText
// for(let i=1;i<=number;i++) {
//     number2 =pastedText.split("").pop();
// }
// number2.join("");
// pastedText=number2;


//      input.value += pastedText ;
//    }
//  }

//  console.log(3/2)


//  /* End Assignment 3 */

// /* Start Assignment 5 */

/* ⁡⁢⁣⁢verifie if an attribute is found or not if yes change it's content if no add it whit new value⁡ */
// let one =document.querySelector(".one");
// let oneClass= one.className

// let two = document.querySelector(".two");
// let twoClass = two.className

// console.log(oneClass);
// console.log(twoClass);

// one.className=twoClass;
// two.className=oneClass;

// let oneTitle= two.title;
// let twoTitle= one.title;

// one.itle=twoTitle;
// two.title=oneTitle;

// one.textContent =one.textContent +" "+ 2;

// const temp = one.innerHTML;
//   one.innerHTML = two.innerHTML;
//   two.innerHTML = temp;

// /* End Assignment 4 */


// /* Start Assignment 5 */

// let imgs =document.querySelectorAll('[decoding="async"]');

// for(let i = 0; i<imgs.length;i++) {
// if(imgs[i].hasAttribute("alt")) {
// imgs[i].alt="old"
// }else {
//     imgs[i].setAttribute("alt","Elzero New");
// }
// }

// /* End Assignment 5 */


/* Start Assignment 6 */

/*⁡⁢⁣⁢Div Generator⁡  */

let mainForm = document.querySelector("form");


mainForm.style.cssText = "display:flex; flex-direction:column;align-items:center; margin: auto;"
    ;


/* Start input numbers of elements to generate  */
let input = document.querySelector('[type="number"]');

input.style.cssText = "margin-bottom:10px; width:250px; padding:5px;"
    ;



/* Start content for each elements   */
let input2 = document.querySelector('[name="texts"]');


input2.style.cssText = "margin-bottom:10px; width:250px; padding:5px;"
    ;

/* End content for each elements  */


/* Start input type of elements  to generate  */
let select = document.querySelector(' [name="type"] ');
select.style.cssText = "margin-bottom:10px;margin-top:10px;width:260px; padding:5px;"
    ;

let selectOption = document.querySelector(' [name="type"]')

optionOne = selectOption.querySelector('option[value="Div"]');

optionTwo = selectOption.querySelector('option[value="Section"]');

/* End input type of elements  to generate  */

/* Start Submit  */

let submit = document.querySelector(' [type="submit"]');
submit.style.cssText = "margin-bottom:10px;margin-top:10px;width:260px; padding:5px;background-color:#1CC7EB; border:none; font-weight:bold; color:white;"
    ;

submit.onclick = function () {

    let NumberelementsTogenerate = input.value;

    let bodyContent = document.querySelector(".results");

    let element;

    for (let i = 1; i <= NumberelementsTogenerate; i++) {
        if (optionOne.selected) {  element = document.createElement("div"); }
        if(optionTwo.selected) {
             element = document.createElement("section");
       }
        let elementContent = document.createTextNode(input2.value);
        element.appendChild(elementContent);
        element.style.cssText = "background-color:#F5562E; padding:20px;color:white; display:flex; justify-content:center;align-items:center; font-weight:bold;"
        bodyContent.appendChild(element);
    }
if(optionOne.selected){bodyContent.style.cssText = "margin-top:50px;display:grid;grid-template-columns:repeat(3,500px); gap:50px 30px;"}else {
    bodyContent.style.cssText="float:left"
}

}


/* End Submit  */










/* the function  */






document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();

};


/* end input numbers of elements to generate  */







