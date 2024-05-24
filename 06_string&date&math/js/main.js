

// String
let str = "Hello World";

str += " Lorem    ipsum";

console.log(str);
str[0] = "A"
console.log(str[0]);

console.log(str.length)
console.log(str.indexOf('W'))

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charCodeAt(1));
console.log(str.substring(1,5));

let line = new String(" kk ")


console.log("Length : " + line.trim().length)


// Date

let date = new Date();
console.log(date.getFullYear())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())

let start = new Date(1992,3,24)

console.log((date - start) / 3600)


// Math
console.log("Round " + Math.round(2.1))
console.log("Floor " + Math.floor(2.9))
console.log("Ceil " + Math.ceil(2.1))

console.log(Math.sqrt(4))
console.log(Math.pow(4,2))
console.log(Math.min(4,2,41))
console.log(Math.max(4,2,14))


// Random
for (let index = 0; index < 10; index++) {
    alert(Math.floor(Math.random() * 10) + 1)
    // (rand + min) * max - min + 1
}