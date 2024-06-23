// /* ⁡⁢⁣⁢Start Assinement 1⁡ */
// // function Car(name, model, price) {
//     //     this.n = name;
//     //     this.m = model;
//     //     this.p = price;
//     //   }

//     class Car {name
//         constructor(name, model, price) {
//             this.n = name;
//             this.m = model;
//             this.p = price + 1000;
//         }
//         run () {
//             return "Car Is Running Now";
//         }
//         stop () {
//             return "Car Is Stopped";
//         }
//     }

//     let carOne = new Car("name1", "Model1", 5000);
//     let carTwo = new Car("name2", "Model2", 6000);
//     let carThree = new Car("name3", "Model3", 7000);

//     console.log(`Car One name Is ${carOne.n} and Model is ${carOne.m} and Price Is ${carOne.p}
//     ${carOne.run()}
//     `);
//     // Needed Output

//     //   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//     //   "Car Is Running Now"

//     /* ⁡⁢⁣⁢End Assinement 1⁡ */

    // /* ⁡⁢⁣⁢Start Assinement 2⁡⁡ */

    // class Phone {
    //     constructor(name, serial, price) {
    //       this.name = name;
    //       this.serial = serial;
    //       this.price = price;
    //     }
    //   }

    // class Tablet  extends Phone {
    //     constructor(name, serial, price,size="Unknown") {
    //         super(name, serial, price)
    //         this.size=size
    //     }
    //     fullDetails () {
    //    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
    //     }
    //   }

    //   // Write Tablet Class Here

    //   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
    //   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
    //   let TabletThree = new Tablet("LG", 250450650, 650);

    //   console.log(`${TabletOne.fullDetails()}`);
    //   // iPad Serial is 100200300 And Size Is 12.9

    //   console.log(`${TabletTwo.fullDetails()}`);
    //   // Nokia Serial is 350450650 And Size Is 10.5

    //   console.log(`${TabletThree.fullDetails()}`);
    //   // LG Serial is 250450650 And Size Is Unknown

    // /* ⁡⁢⁣⁢End Assinement 2⁡⁡ */


// /* ⁡⁢⁣⁢⁡⁢⁣⁢⁡⁢⁣⁢Start Assinement 3⁡ */

// // Edit The Class


// class User {
//     #c
//     constructor(username, card="") {
//       this.u = username;
//   this.#c=card;
//     }

//     getCard(card) {

//             if(/\d{4}-\d{4}-\d{4}-\d{4}/ig.test(""+card)){
//                 return ""+card
//             } else {
//     let string =""+card

//     const array = string.split("");

//     // Add hyphens to the array of characters at every 4th character.
//     let counter =1;
//     let counter2 =0;
//     for (let i = 0; i < array.length ; i++) {
//       if ( i  === counter*4+counter2) {
//         array.splice(i, 0, '-');
//         counter++;
//         counter2++;
//       }
//     }

//     // Join the array of characters back into a string.
//     const formattedString = array.join('');

//  return formattedString

//     }

// }


// showData() {
// return `Hello ${this.u}  Your Credit Card Number Is ${this.getCard(this.#c)}`;
//     }

// }

//   // Do Not Edit Anything Below

//   let userOne = new User("Osama", "1234-5678-1234-5678");
//   let userTwo = new User("Ahmed", "1234567812345678");
//   let userThree = new User("Ghareeb", 1234567812345678);

//   console.log(userOne.showData());
//   // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userTwo.showData());
//   // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userThree.showData());
//   // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userOne.c); // Prevent Accessing To Card Property Here
//   // Undefined

// /* ⁡⁢⁣⁢⁡⁢⁣⁢End Assinement 3⁡ */


// /* ⁡⁢⁣⁢start Assinement 4⁡ */

// // Write Your Code Here

// String.prototype.addLove = function() {
//   return `I Love Elzero Web School`;
// }

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School


// /* ⁡⁢⁣⁢⁡⁢⁣⁢End Assinement 4⁡ */

/* ⁡⁢⁣⁢Start Assinement 5⁡ */

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj, "score", {
  writable: false,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(myObj, "id", {
  writable: true,
  enumerable: false,
  configurable: true,
});
console.log(myObj.id)

Object.defineProperty(myObj, "country", {
  writable:false,
  enumerable: false,
  configurable:true,
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);


//  Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}

/* ⁡⁢⁣⁢End Assinement 5⁡ */