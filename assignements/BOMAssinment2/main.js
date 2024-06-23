/*Start Assignement1  */

/*
⁡⁢⁣⁣user choosing afont and acolor to the page and font-size and keep the setting that the user have choosen after reloading or quititng the page⁡
*/

// /* ⁡⁢⁣⁣here weare creating three select element with options so that the user can choose a spesific option to be aplayed to the page and saves it in the local storage and keep it shown in the select option in the front⁡ */


// /* 𝗦𝘁𝗮𝗿𝘁 𝗘𝘃𝗿𝗲𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗧𝗵𝗲 𝗙𝗼𝗻𝘁-𝗳𝗮𝗺𝗶𝗹𝘆 𝗧𝗵𝗮 𝗧𝗵𝗲 𝗨𝘀𝗲𝗿 𝗖𝗵𝗼𝗼𝘀𝗲 */

// const fontFamily = document.querySelector('[name="font-family"]');


// let selectedElement;
// fontFamily.addEventListener("change", function() {
//   const selectedIndex = fontFamily.selectedIndex;
//   const optionElement = fontFamily.options[selectedIndex];
//   if(optionElement.selected === true) {
//     /* console.log(optionElement.innerHTML) */
//     window.localStorage.setItem("font-family",optionElement.innerHTML)
//     document.body.style.fontFamily=optionElement.innerHTML
//     /* save the select choosing in local storage */

// };



// });

// /* ⁡⁢⁣⁢Save Font Family selected Value to local storage⁡ ⁡⁢⁣⁢and keep it in front after reloding⁡*/

// let fontFamilyArray =document.querySelectorAll('[name="font-family"] option')

// fontFamilyArray.forEach(element => {

//     if(element.innerHTML === window.localStorage.getItem("font-family") ) {
//         element.selected=true
//     }
// });


// /*
// ⁡⁢⁢⁢Save Data To Local Storage and keep the setting after reloading⁡
// */

// document.body.style.fontFamily=`${window.localStorage.getItem("font-family")}`

// /* 𝗘𝗻𝗱 𝗘𝘃𝗿𝗲𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗧𝗵𝗲 𝗙𝗼𝗻𝘁-𝗳𝗮𝗺𝗶𝗹𝘆 𝗧𝗵𝗮 𝗧𝗵𝗲 𝗨𝘀𝗲𝗿 𝗖𝗵𝗼𝗼𝘀𝗲 */

// /*⁡⁣⁢⁣<------------------------------------------------------------------------------------------------------------------------------------------------------> ⁡ */


// const backgroudColor = document.querySelector('[name="color"]');

// backgroudColor.addEventListener("change", function() {
//     const selectedIndex = backgroudColor.selectedIndex;
//     const optionElement = backgroudColor.options[selectedIndex];
//     if(optionElement.selected = true) {
//         /* console.log(optionElement.innerHTML) */
//         window.localStorage.setItem("background-color",optionElement.innerHTML)

//         document.body.style.backgroundColor=optionElement.innerHTML

//         /* save the select choosing in local storage */



//     }
// });

// /* ⁡⁢⁣⁢Save Background Color selected to local storage⁡  ⁡⁢⁣⁢⁡⁢⁣⁢and keep it in front after reloding⁡ */

// let backgroundColorArray =document.querySelectorAll('[name="color"] option')

// backgroundColorArray.forEach(element => {

//     if(element.innerHTML === window.localStorage.getItem("background-color") ) {
//         element.selected=true
//     }
// });

// /*
// ⁡⁢⁢⁢Save Data To Local Storage and keep the setting after reloading⁡
// */

// document.body.style.backgroundColor=`${window.localStorage.getItem("background-color")}`


// /* 𝗘𝗻𝗱 𝗘𝘃𝗿𝗲𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗧𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱-𝗰𝗼𝗹𝗼𝗿 𝗧𝗵𝗮 𝗧𝗵𝗲 𝗨𝘀𝗲𝗿 𝗖𝗵𝗼𝗼𝘀𝗲 */

// /*⁡⁣⁢⁣<------------------------------------------------------------------------------------------------------------------------------------------------------>⁡  */

// /* 𝗦𝘁𝗮𝗿𝘁 𝗘𝘃𝗿𝗲𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗧𝗵𝗲 𝗳𝗼𝗻𝘁-𝘀𝗶𝘇𝗲 𝗧𝗵𝗮 𝗧𝗵𝗲 𝗨𝘀𝗲𝗿 𝗖𝗵𝗼𝗼𝘀𝗲 */
// const fontSize = document.querySelector('[name="font-size"]');

// fontSize.addEventListener("change", function() {
//   const selectedIndex = fontSize.selectedIndex;
//   const optionElement = fontSize.options[selectedIndex];
//   if(optionElement.selected = true) {
//     document.body.style.fontSize=optionElement.innerHTML+"px"
//     window.localStorage.setItem("font-size",optionElement.innerHTML)

//             /* save the select choosing in local storage */
// /* window.localStorage.setItem("font-size-select-content",optionElement.innerHTML)
//    */
// }
// });


// /* ⁡⁢⁣⁢Save FOnt Size selected To Local Storage ⁡⁢⁣⁢and keep it in front after reloding⁡⁡ */
// let fontSizeArray =document.querySelectorAll('[name="font-size"] option')

// fontSizeArray.forEach(element => {

//     if(element.innerHTML === window.localStorage.getItem("font-size") ) {
//         element.selected=true
//     }
// });

// /*
// ⁡⁢⁢⁢Save Data To Local Storage and keep the setting after reloading⁡
// */


//     document.body.style.fontSize=`${window.localStorage.getItem("font-size")}`

// /* 𝗘𝗻𝗱 𝗘𝘃𝗿𝗲𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗧𝗵𝗲 𝗳𝗼𝗻𝘁-𝘀𝗶𝘇𝗲 𝗧𝗵𝗮 𝗧𝗵𝗲 𝗨𝘀𝗲𝗿 𝗖𝗵𝗼𝗼𝘀𝗲 */

/*End Assignement 1  */

// /*⁡⁢⁣⁢Start Assignement 2⁡  */

/*
⁡⁢⁣⁣keep the input filed full after reloading the page but when exiting the page the content is removed from the input field⁡
*/

// /* Start Everything About Select */
// const select = document.querySelector('[name="select"]');
// let selectedElement;
// select.addEventListener("change", function() {
//   const selectedIndex = select.selectedIndex;
//   const optionElement = select.options[selectedIndex];
//   if(optionElement.selected === true) {
//     window.sessionStorage.setItem("choice",optionElement.innerHTML)

//     /* save the select choosing in local storage */

// };



// });

// /* ⁡⁢⁣⁢Save The selected Value to local storage⁡ ⁡⁢⁣⁢and keep it after reloding⁡*/

// let selectArray =document.querySelectorAll('[name="select"] option')

// selectArray.forEach(element => {

//     if(element.innerHTML === window.sessionStorage.getItem("choice") ) {
//         element.selected=true
//     }
// });





// /* 𝗘𝗻𝗱 𝗘𝘃𝗿𝗲𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗧𝗵𝗲 select  */

// /* 𝗦𝘁𝗮𝗿𝘁 𝗘𝘃𝗲𝗿𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗶𝗻𝗽𝘂𝘁 */

// //⁡⁢⁢⁢Start input 1⁡
// const input1 =document.querySelector(".input1")
// input1.onblur =function() {
// const value =input1.value
// window.sessionStorage.setItem("value1",value);
// }
// input1.value=sessionStorage.getItem("value1")
// //⁡⁢⁢⁢End input 1⁡

// //⁡⁢⁢⁢start input 2⁡
// const input2 =document.querySelector(".input2")
// input2.onblur =function() {
// const value =input2.value
// window.sessionStorage.setItem("value2",value);
// }
// input2.value=sessionStorage.getItem("value2")
// //⁡⁢⁢⁢End input 2⁡

// //⁡⁢⁢⁢Start⁡ input 3⁡

// const input3 =document.querySelector(".input3")
// input3.onblur =function() {
//     const value =input3.value
//     window.sessionStorage.setItem("value3",value);
// }
// input3.value=sessionStorage.getItem("value3")

// //⁡⁢⁢⁢End input 3⁡

// /* 𝗘𝗻𝗱 𝗘𝘃𝗲𝗿𝘆 𝘁𝗵𝗶𝗻𝗴 𝗔𝗯𝗼𝘂𝘁 𝗶𝗻𝗽𝘂𝘁 */
// /*⁡⁢⁣⁢End Assignement 2 ⁡ */