/* console.log(typeof true); */
 function Random(a,b,c) {
    if(typeof a ==="string" ) {
        console.log(`Hello ${a}`)
}else if(typeof b ==="string" ) {
    console.log(`Hello ${b}`)
}
else  {
    console.log(`Hello ${c}`)
}
if(typeof a ==="number" ) {
    console.log(`You're Age Is ${a}`)
}
else if(typeof b ==="number" ) {
    console.log(`You're Age Is ${b}`)
}
else {
    console.log(`You're Age Is ${c}`)
}
if(typeof a ==="boolean" ) {
    if(a === true) {
        console.log(`You Are Available For Hire`)
    }else {
        console.log(`You Are Not Available For Hire`)
    }
}
else if(typeof b ==="boolean" ) {
    if(b === true) {
        console.log(`You Are Available For Hire`)
    }else {
        console.log(`You Are Not Available For Hire`)
    }
}
else {
    if(c === true) {
        console.log(`You Are Available For Hire`)
    }else {
        console.log(`You Are Not Available For Hire`)
    }
}
}

Random("bachir",20,true);
console.log("\n");
Random(20,"bachir",true);
console.log("\n");
Random(20,true,"bachir");
console.log("\n");
Random(false,"bachir",20);