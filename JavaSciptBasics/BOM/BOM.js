/*
BOM [Browser Object Model]
 -Introduction
 --- window Objectis the browser window
 --- window Contain The DocumentObject
 --- All Global Variables And Objects And Functions Are Members Of Window object
 ------ Test Document And Console

 -whatCan We Do With Window Object ?
 --- Open Window
 --- Close Window
 --- Move Window
 --- Resize Window
 --- Print Document
 --- Run Code AfterPeriod Of Time Once or More  like whne you wait to download something
 --- Fully Control URL bring Onlu Protocol
 --- Save Data Inside Browser To Use Later like saving color of the page when the user is signed in
*/

/*<----------------------------------------------------------------------------------------->  */

/*
BOM
-alert(message) ==> Need No ResponseOnly Ok Available
-confirm(Message) ==> Need Response And Return A Boolean
-prompt(message,Default Message) ==> Collect Data

libarary ==> sweetalert2
*/

// alert("test");
// console.log("test") /* This Message Is Printed After The alert Is Gone */

// let confirmMsg =confirm("Are You Sure ?")

// console.log(confirmMsg);

// if(confirmMsg) {
//     console.log("Item Deleted");
// }else{
//     console.log("Item Not Deleted");

// }


/* let promptMsg =prompt("Good Day For You ?","write Day With Only three Caracters ");

console.log(promptMsg); */
/*<----------------------------------------------------------------------------------------->  */

/*
BOM
 -setTimeout(function,Timeout,Additioanl Parms) function to be executed after spesific time
 -clearTimeout(Identifier) Stops The SetTimeout

*/

// setTimeout(function(){
// console.log(`Msg`);
// },3000) /* ms */


/* setTimeout(sayMsg,3000,"Osama",20)

function sayMsg(user,age) {
console.log(`Iam Message For ${user} his age is ${age} `);

} */

// let counter=setTimeout(sayMsg,3000)
// function sayMsg() {
// console.log(`Iam Message`);
// }

// let btn=document.querySelector("button")
// btn.onclick =function() {
//     clearTimeout(counter); /* counter is The Id of The Set Timeout ==> Number */
// }

/*################################################################################  */

/*
BOM
 - setInteval(Function,Millseconds,Additional Parms)  wait ms between calls until u use clearInterval
 -clearInterval(Identifier)
*/

// setInterval(function(){
// console.log(`Msg`);
// },1000) /* ms */





/* setInterval(sayMsg,1000,"Osama",20)

function sayMsg(user,age) {
console.log(`Iam Message For ${user} his age is ${age} `);

} */


/* let div =document.querySelector("div")

function countdown(){
    div.innerHTML -=1;
    if(div.innerHTML === "0") {
clearInterval(counter);
    }
}

let counter =setInterval(countdown,1000); */

/*
BOM

 - location Object --> deal with URL
 --- href Get / Set [URL || Hash || File || Mail]
 --- host
 --- hash
 --- protocol
 --- replace()
 --- assign()

*/

// console.log(location);
// console.log(location.href); /* URL Of My Page */

// location.href ="https://google.com" /* Go To Google Don't delete the entry from history  Also can go to file mail etc... */


/* location.href ="/#section-two" */ /* Go To Spesific Section in the website */

// console.log(location.host); /* with port the same if we have real domain or if we are not in the local server name of the website */
// console.log(location.hostname);

// console.log(location.protocol);

/* console.log(location.hash); the hash from the url  */


/* location.reload() */

/* location.replace("https://elzero.org"); remove the current page from the entry of history*/

/* location.assign("https://elzero.org");new URL preserving the previous URL in the history  */


/*<----------------------------------------------------------------------------------------------------------------------->  */

/*
BOM [Browser Object Model]
- open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
- close()
- Window Features
--- left [Num]
--- top [Num]
--- width [Num]
--- height [Num]
--- menubar [yes || no]

Search
- Window.Open Window Features
*/
/*
setTimeout(function () {
    window.open("", "_self", "", false);
}, 2000);

setTimeout(function () {
    window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
  }, 2000);
*/

/*<----------------------------------------------------------------------------------------------------------------------->  */


/*
BOM [Browser Object Model]
- History API
--- Properties
------ length
--- Methods
------ back()
------ forward()
------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
  */

/* console.log(history); */

/*<----------------------------------------------------------------------------------------------------------------------->  */

/*
 BOM [Browser Object Model]
 - stop()
 - print()
 - focus()
 - scrollTo(x, y || Options)
 - scroll(x, y || Options)
 - scrollBy(x, y || Options)
 */

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

/*<----------------------------------------------------------------------------------------------------------------------->  */
/*
BOM
- Practise => Scroll To Top
- scrollX [Alias => PageXOffset for legacy browsers]
- scrollY [Alias => PageYOffset]
*/

/* console.log(window.scrollX === window.pageXOffset); */

// let btn = document.querySelector("button")

// window.onscroll = function () {
    //     if (window.scrollY >= 600) {
        //         /* console.log(`crolling y Value Is ${window.scrollY}`) */
        //         btn.style.display = 'block'
        //     } else {
            //         btn.style.display = 'none'
            //     }
            // }

            // btn.onclick = function () {
                // window.scrollTo({
//     left:0,
//     top:0,
//     behavior:'smooth',
// });
// };
/*<----------------------------------------------------------------------------------------------------------------------->  */

// /*
// BOM
//  - Local Storage ===> Property in window to access Storage Object and this is an object that we can put data in it
//  -- setItem
//  -- getItem
//  -- removeItem
//  -- clear
//  -- Key
//  Info
//  - NoExpiration Time
//  - HTTP And HTTPS different
//  - Private Tab ==> delete all local storage aftergoing out of the page

// */
// // Set
// window.localStorage.setItem("color","#f00")
// window.localStorage.fontWeight="bold";
// window.localStorage["fontSize"]="20px";
// console.log(window.localStorage);
// console.log(typeof window.localStorage);

// // get

// window.localStorage.getItem("color")
// console.log(window.localStorage.getItem("color"))

// window.localStorage.color;
// console.log(window.localStorage.color)

// window.localStorage["color"];
// console.log(window.localStorage["color"])

// // // remove
// // window.localStorage.removeItem("color");

// // //clear ==> Remove All

// // window.localStorage.clear();

// //Get Key

// console.log(window.localStorage.key(0))


// // Set Color In Page

// document.body.style.backgroundColor = window.localStorage.getItem("color");

/*<----------------------------------------------------------------------------------------------------------------------->  */


/*
BOM
 -Practise
 -My Solotion To The Challenge
*/
// let liColor =document.querySelectorAll("ul  li");
// let experiment= document.querySelector(".experiment");

// liColor.forEach(function(element){

    //     element.onclick =function() {
        //         /* Remove All Active Classes */
        //     liColor.forEach(function(li){
//         li.classList.remove('active');

//    });
//    /* add Active Class To The Element That We Clicked On It */
//     element.classList.add('active');
//     /* add the color Of the Active element (That We Clicked On it) in The Local Sotrage */
//     let currentExpirementColor=window.localStorage.setItem("color",`${element.getAttribute('data-color')}`)
// /* Change The color of Div With Expirement Class To The Color Of The Active li */
// experiment.style.backgroundColor=`${window.localStorage.getItem("color")}`;


// }
// });
// /* Keep The Same Previous Setting when Reloding so that The Color Won't Change */
// if(window.localStorage.getItem("color")) {
    //     liColor.forEach(function(li){
        //         /* Remove All Active Classes */
        //         li.classList.remove('active');

        //         });

//     liColor.forEach(function(element){
// if(element.getAttribute('data-color') === window.localStorage.getItem("color") ) {
    //     element.className="active"
    // }
    //     });

    //     experiment.style.backgroundColor=`${window.localStorage.getItem("color")}`;

    // }

/* ⁡⁢⁣⁢ <⁡⁢⁣⁢---------------------------------------------------------------------------------------------------------------------------------------------------⁡>⁡ */

//     /*
//     BOM
//      -Practise
//      - Elzeros Solution To The Challenge
//     */

// let lis =document.querySelectorAll("ul li");
// let exp =document.querySelector(".experiment")

// /* If there Is Color In The Local Storage */
// if ( window.localStorage.getItem("color")) {
    //     /*[1] Color to Div  */
    //     exp.style.backgroundColor = window.localStorage.getItem("color");
    //     /*[2] Remove Active Class From All Li */
    //     lis.forEach((li) => {
        //         li.classList.remove("active")
        //     })

        //     /* [3]  Add Active Class To Current Class*/

        //     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }
// lis.forEach(function(li) {
//     li.addEventListener("click",(e) => {
    // /* console.log(e.currentTarget.dataset.color); */

    // /* Remove Active Class From All Lis */
    // lis.forEach((li) => {
        //     li.classList.remove("active")
        // })
        // /* Add Active Class To Current Element */
// e.currentTarget.classList.add("active")
// /* Add Current COlor To The Local Storage */
// window.localStorage.setItem("color",`${e.currentTarget.dataset.color}`);
// /* Change expirement's div backgroundColor To The Color In The local Storage */
// exp.style.backgroundColor = e.currentTarget.dataset.color;
//     })
// })

/* ⁡⁢⁣⁢<--------------------------------------------------------------------------------------------------------------------------------------------------->⁡ */

// /*
// BOM
//   Session Storage
//    - setItem
//    - getItem
//    - removeItem
//    - clear
//    - key
// Info
//  - New Tab = New Session
//  - Duplicate Tab = Copy Session
//  - New Tab With Same url = New Session

// saves Data Only In a Tab Current Sit
// */

// window.localStorage.setItem("color","red");
// window.sessionStorage.setItem("color","blue");