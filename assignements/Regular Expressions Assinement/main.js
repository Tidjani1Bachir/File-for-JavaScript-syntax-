/* ⁡⁢⁣⁢Start Assinement 1⁡ */
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regex =/\d{4}:db\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig;
console.log(ip.match(regex));
/* ⁡⁢⁣⁢⁡⁢⁣⁢End Assinement 1⁡⁡ */

/* ⁡⁢⁣⁡⁢⁣⁢Start Assinement 2⁡ */

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let regex2 = /Os\d*O/ig;

console.log(specialNames.match(regex2));

/* ⁡⁢⁣⁢End Assinement 2⁡ */

/* ⁡⁢⁣⁢Start Assinement ⁡⁢⁣⁢3⁡ */

let phone = "+(995)-123 (4567)";
let regex3= /[+]\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;

console.log(phone.match(regex3));
/* ⁡⁢⁣⁢End Assinement ⁡⁢⁣⁢3⁡ */


/* ⁡⁢⁣⁢Start Assinement 4⁡⁡ */

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;



/* ⁡⁢⁣⁢End Assinement ⁡⁢⁣⁢4 */


/* ⁡⁢⁣⁢⁡⁢⁣⁢Start Assinement 5⁡ */

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re2 = /\d{2}[\/]?|[\s]?|[-]?\d{2}[\/]?|[\s]?|[-]?\d{4}}/ig;

console.log(re2.test(date1)); // "25/10/1982"
console.log(re2.test(date2)); // "25 - 10 - 1982"
console.log(re2.test(date3)); // "25 10 1982"
console.log(re2.test(date4)); // "25 10 82"

/* ⁡⁢⁣⁢End Assinement ⁡⁢⁣⁢5⁡ */


/* ⁡⁢⁣⁢⁡⁢⁣⁢Start Assinement 6⁡ */

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re3 =/(https?:\/\/)?(www.)?\w+.\w+(:\d*\/\w*.[php?][id=]\d+[&]\w*=\w*)?/ig; //; // Write Your Pattern Here3

console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re3));
console.log(url4.match(re3));
console.log(url5.match(re3));


/* ⁡⁢⁣⁢End Assinement ⁡⁢⁣⁢6⁡ */