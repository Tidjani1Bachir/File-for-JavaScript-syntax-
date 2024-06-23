/*
herewe create aweb page design using only DOM
*/

document.body.style.cssText="margin:0; padding:0;"
let header =document.createElement("header");

header.style.cssText ="display:flex; align-items:center;"
/*⁡⁢⁣⁢Start Every thing about Logo in header⁡ */
let logo =document.createElement("div");
logo.className ="logo";
logo.style.cssText ="color:rgb(35,169,110); font-size:25px; font-weight:bold; margin-left:20px;"

let logoText =document.createTextNode("Elzero");

logo.appendChild(logoText);

header.appendChild(logo)
/*⁡⁢⁣⁢end Every thing about Logo in header⁡ */


/*⁡⁣⁢⁢⁡⁢⁢⁢Start Every thing about ul menu in header⁡  */

let menu =document.createElement("ul");
logo.className ="menu";

menu.style.cssText ="display:flex;margin-left:70%;list-style:none; "

/* Start li From menu Named ---> Home */
let menuLi1 =document.createElement("li");
let menuLi1Text= document.createTextNode("Home");
menuLi1.style.cssText ="color:rgb(162, 163, 162); font-size:22px; padding:10px;"
menuLi1.appendChild(menuLi1Text)
menu.appendChild(menuLi1);

/* End li From menu Named ---> Home */


/* Start li From menu Named ---> About */
let menuLi2 =document.createElement("li");
let menuLi2Text= document.createTextNode("About");
menuLi2.style.cssText ="color:rgb(162, 163, 162); font-size:22px; padding:10px;"
menuLi2.appendChild(menuLi2Text)
menu.appendChild(menuLi2);
/* End li From menu Named ---> About */


/* Start li From menu Named ---> Servise */
let menuLi3 =document.createElement("li");
let menuLi3Text= document.createTextNode("Service");
menuLi3.style.cssText ="color:rgb(162, 163, 162); font-size:22px; padding:10px;"
menuLi3.appendChild(menuLi3Text)
menu.appendChild(menuLi3);
/* End li From menu Named ---> Servise */


/* Start li From menu Named ---> Contact */
let menuLi4 =document.createElement("li");
let menuLi4Text= document.createTextNode("Contact");
menuLi4.style.cssText ="color:rgb(162, 163, 162); font-size:22px; padding:10px;"
menuLi4.appendChild(menuLi4Text)
menu.appendChild(menuLi4);
/* End li From menu Named ---> Contact */

console.log(menu);

header.appendChild(menu)

/* End Every thing About Menu */
console.log(header)
document.body.appendChild(header)


/*⁡⁢⁢⁢end Every thing about ul menu in header⁡  */



/* ⁡⁣⁣⁢Start Every thing About Main Content⁡ */

let MainContent =document.createElement("main");

/*
grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
 gap: 30px;"
*/
MainContent.style.cssText ="display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr)); gap: 20px; background-color:rgb(240, 240, 240); padding:20px; height:100vh;"



/*Start Every thing about Products in header */

for(let i=1;i<=15;i++){
    let Product =document.createElement("div");
logo.className ="product";
Product.style.cssText ="display:flex; flex-direction:column; justify-content:center;align-items:center;background-color:white; color:rgb(140, 143, 142);  "

let ProductText =document.createTextNode("Product");

let ProductNumber = document.createElement("span");
let ProductNumberText =document.createTextNode(`${i}`);
ProductNumber.style.cssText="font-size:45px; color:rgb(20, 20, 20);";

ProductNumber.prepend(ProductNumberText);
Product.prepend(ProductNumber);

Product.appendChild(ProductText);


MainContent.appendChild(Product);


}

/*Start Every thing about Products in header */

document.body.appendChild(MainContent);

/* ⁡⁣⁣⁢End Every thing About Main Content⁡ */



/*⁡⁢⁣⁣ Start Every thing About footer⁡ */
let footer =document.createElement("footer");
let footerText =document.createTextNode("Copyright 2021");
footer.style.cssText ="background-color:rgb(35,169,110); display:flex; justify-content:center;align-items:center; height:50px;color:white; marign:0;"

footer.appendChild(footerText);

document.body.appendChild(footer)

/*  ⁡⁢⁣⁣End Every thing About footer⁡ */





