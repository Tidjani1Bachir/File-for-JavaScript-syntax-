/*
- The End
 - other Information => Practice + Tutorials
 - Problem Solving
 - Search In Lessons
 - Advanced Books
*/

/*

⁡⁢⁣⁣Search --->
 Web API
 Loosely Typed vs Strongly Typed
 ** Exponentiation (ES7)
 Cross Origin API [CROS]
 API Authentication
 js is single threaded
 multi threaded language
 preformane.now()
 preformane.mark()
Year 2038 Problem in Computer Science
pushState() + replaceState()
window.Open Window Features
Capture & bubbling js
removeEventlisttener
innerText
strict Mode
execution Context
Lexical Envirenment⁡
*/
/*⁡⁢⁣⁢########################################################################################⁡  */

/*
API is an interface that provides a set of functions to use where the inderline mecanisme of these functions is hidding
*/

/*⁡⁢⁣⁢######################################################################################## ⁡ */
/*

A web API is a set of rules and specifications that define how applications can communicate with each other over the web. It is a way for two software programs to interact with each other and exchange data. Web APIs are typically implemented using HTTP requests, which are the same type of requests that are used to load web pages.

Web APIs can be used to do a wide variety of things, such as:

Get data from online databases
Post data to online databases
Send and receive messages
Perform complex calculations
Control devices

Web APIs are used by all sorts of websites and apps, including:

Social media platforms
E-commerce websites
Weather apps
Maps apps
Ride-sharing apps
Payment processing systems
Here is an example of how a web API might be used:

A weather app might use a web API to get the current weather conditions for a specific location. The app would send an HTTP request to the web API with the location coordinates. The web API would then send back an HTTP response with the current weather conditions.

Web APIs are a powerful tool that can be used to build all sorts of web applications. They are also a great way to expose data and functionality from one application to another.

Here are some of the benefits of using web APIs:

Flexibility: Web APIs can be used to build a wide variety of applications, from simple websites to complex enterprise systems.

Scalability: Web APIs can be scaled to handle large amounts of traffic.

Reusability: Web APIs can be reused by multiple applications, which can save time and money for developers.

Interoperability: Web APIs can be used to connect applications from different vendors. ( Applications from different vendors are software applications that have been developed by different companies. )

If you are interested in learning more about web APIs, there are many resources available online and in libraries. You can also find many tutorials and examples that can help you get started.
*/
/*⁡⁢⁣⁢########################################################################################⁡  */

/*

 - API Authentication is the process of verifying the identity of a client or user who is requesting access to an API. This is important to protect the API from unauthorized access and to ensure that only authorized users can access the API's resources.

#####################################

 - Here are some of the benefits of using API Authentication:

Improved security: API Authentication helps to improve the security of APIs by preventing unauthorized access.
Enhanced compliance: API Authentication can help organizations to comply with regulations that require them to protect user data.
Improved user experience: API Authentication can provide a better user experience by allowing users to access APIs without having to enter their credentials each time.
Overall, API Authentication is an important part of securing APIs and protecting user data. By implementing a robust API Authentication solution, organizations can improve the security of their APIs and protect their users' data from unauthorized access.

*/

/*⁡⁢⁣⁢########################################################################################⁡  */

/* In computer programming, a programming language is strongly typed if it demands the specification of data types. A programming language is loosely typed, or weakly typed, when it does not require the explicit specification of different types of objects and variables. The "looser" typing rules in weakly typed programming languages can produce erroneous or unpredictable results. It can execute implicit type conversions at runtime.

In programming languages, the concepts of strong and weak, or loose, typing are related to but different from static and dynamic typing. A programming language that is strongly typed can be either statically or dynamically typed.

In static typing, type checking takes place at compile time and catches such things as missing functions, invalid type arguments, or a mismatch between a data value and the type of variable to which it's assigned -- before the program has a chance to run the erroneous code and risk crashing. In dynamically typed languages, type checking occurs at runtime, so the compiler will ignore invalid type arguments or mismatched data. If the type checker detects an error, it will alert the developer to repair the code to avoid the program crashing. */

/*⁡⁢⁣⁢########################################################################################⁡  */

/*

Cross Origin API [CROS] --> it's help keep the web server safe by guarding server resources from requests by unknown origins like other web apps,unless of course they have permission,we can simulate this by issuing a fetch request in the dev console from the google domain and we are fetching the mdn.com domain that's crossing origins and then we have a cors policy error and this can confuse beginners though ,as it suggests possibly setting the request mode to 'no-cors' but this setting doesn't turn off cors for the server it's just alters the fetch request,the request in no-cors mode doesn'ts upport JSON data as a content type,the server admin has to give u permission by setting their Acces-Control-Allow-Origin header to either let everyone access the resources ,or more commonly let an allowed list of domains have access,it's kind like having a v i p pass for ressources and otherwise,the CORS doorman won't let you pass,there is much more to learn about CORS,and we recommandethe mdn cors page

*/

/*
execution context:
 1 -variable environement where we can find variables, functions,
 2- thread of execution where code executed line by line

 js is synchronous () single-threaded (can execute one commande at time in spesific order  ) language
*/





/*
using strict mode will help youin findingerrors cmmon one like forggetting let in an index of loop or in global variable try to reassigne a writable:false property inand object,missspellinga variable ,deleating functions,variables,duplicating parameters names ,

 -Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist,

 -so scripts can opt into strict mode incrementally. ,Strict mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in {} braces; attempting to apply it to such contexts does nothing. eval code, Function code

  -event handler attributes, strings passed to setTimeout(), and related functions are either function bodies or entire scripts, and invoking strict mode in them works as expected.

 -The entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it.

function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;

*/

/*

The lexical environment of a function is important because it determines which variables are accessible to the function. A function can access any variable that is declared in its own lexical environment, or in any of its outer lexical environments.

For example, consider the following code:

JavaScript
function outer() {
  var outerVar = 1;

  function inner() {
    console.log(outerVar); // 1
  }

  inner();
}

outer();

#########################################################################################################

The lexical environment of a function is also important for closures. A closure is a function that can access variables from its outer scope, even after its outer scope has finished executing. This is possible because the closure retains a reference to the lexical environment of its outer scope.

For example, consider the following code:

JavaScript
function outer() {
  var outerVar = 1;

  function inner() {
    return function() {
      console.log(outerVar); // 1
    };
  }

  return inner();
}

var closure = outer();

closure(); // 1


#########################################################################################################


*/