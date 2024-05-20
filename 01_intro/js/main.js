// - однорядковий коментар
/*
    багаторядковий коментар
*/


// data types
/*
    - number //(BigInt)  1,2.5
    - string   "line" '' ``
    - boolean  true, false
    - object
    - null
    - undefined
    - Symbol
*/

// variable
// let, var, const;
// console.log(number);
// console.log(name);
// var name;
// name = "Anonim";

// let number = 27;
// const PI = 3.14;

// //PI = 33;
// console.log(PI);

// alert("Hello World!!!");
// let res = confirm("Exit");
// res == true ? document.body.style.backgroundColor = "green" : document.body.style.backgroundColor = "red";
// let firstName = prompt("Enter your name","test");
// console.log(firstName);

// a++; b--; ++a; --b;
// a = 2
// let res =  ++a * 2; => 6
// a++ * 2; => 4
// let a = 2;
// //console.log(++a * 2);
// console.log(a++ * 2);
// console.log(a);

// + - * / %, ** 
// let a = 2, b = 3;

// console.log(a + " + " + b + " = " + (a + b))
// console.log(a + " - " + b + " = " + (a - b))
// console.log(a + " * " + b + " = " + (a * b))
// console.log(a + " / " + b + " = " + (a / b))
// console.log(a + " % " + b + " = " + (a % b))
// console.log(a + " ** " + b + " = " + (a ** b))

// Priority
/*
    ++a, ++b,
    ()
    %
    * /
    + -
    a-- b++
*/

// ==, !=, >, <, >=, <=, ===
// || - or; && - and
// let day = prompt("Enter number day")
// if (day == 1 || day == 8 || day == 15) {
//     alert("Monday")
//     document.body.style.backgroundColor = "brown";
// }
// else if (day == 2) {
//     alert("Tuesday")
//     document.body.style.backgroundColor = "green";
// }
// else
//     console.error("Error number")

// let number = prompt("Enter number");
// if(number >= 1 && number <= 20)
// {
//     alert("ok");
// }

//let day = +prompt("Enter number day")
// console.log(typeof(day));
// switch(day) // day ===
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     default:
//         console.error("Error")
//         break;
// }
// let month = +prompt("Enter month");

// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("31 days");
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log("30 days")
//         break;
//     case 2:
//         {
//             alert("test")
//             let year = +prompt('Enter year');
//             if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {

//                 console.log("29 days")
//             }
//             else {
//                 console.log("28 days")
//             }
//             break;
//         }
// }

let first = "5.5";
let second = "5.5";
console.log(parseFloat(first));
console.log(parseInt(second));
console.log(parseFloat(first) + parseInt(second));