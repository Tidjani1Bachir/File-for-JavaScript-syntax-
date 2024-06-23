let myAdmins = ["Ahmed","Osama","Stop","Samera"];

let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
let i
for(i=0;i<myAdmins.length;i++) {
if(myAdmins[i] === "Stop") break;
}
let adminsLenght=i;

for(i=0;i<myEmployees.length;i++) {
if(myEmployees[i] === "Stop")
 break;
}
let employeesLength=i;

document.write(`<div>We have ${adminsLenght} Admins </div>`);

document.write(`<div>We have ${employeesLength} Employees</div>`);


for(let i=0;i<adminsLenght;i++) {
    document.write(`<hr> `);
    document.write(`<div>The Admin For Team Is ${myAdmins[i]}</div>`);
    document.write(`<h3>Team Members</h3>`);
    k=1;
    for(let j=0;j<myEmployees.length;j++) {
        if(myEmployees[j][0] == myAdmins[i][0]){
            document.write(`<p>- ${k} ${myEmployees[j]}</p>`);
         }
    }
}

