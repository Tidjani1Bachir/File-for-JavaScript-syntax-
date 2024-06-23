let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(parseInt(Math.min(a,b,c,d)));

console.log((parseInt(b)/2) * a);


console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));

console.log((b / d).toFixed(2) - 17 + 0.13);
console.log(parseInt(b / d) - 16 );
