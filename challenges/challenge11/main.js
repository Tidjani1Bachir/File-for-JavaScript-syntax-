let myString ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter(function(element) {
if(isNaN(element) && element !== "," && element !=="Z" )
   { return  element;}
 else {
return "";
    }
    }).map((element,arr) =>

    element[0] === "_"? element.replace("_"," ") :element
        ).reduce((acc,current)=> `${acc}${current}`).slice(1);


console.log(solution); /* Elzero Web School */