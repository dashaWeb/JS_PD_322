

// let student = new Object();
// student.name = "Pavlo";
// student.age = 19;

// console.log(student)

// let key = "surname"

// let student = {
//     year : 2000,
//     name : "Olena",
//     group: "PD322",
//     age: function(){
//         return new Date().getFullYear() - this.year; 
//     },
//     [key] : "Bondar"
// };

// console.log(student);
// console.log("name" in student)
// for (let key in student) {
//     if (student.hasOwnProperty(key)) {
//         document.write(`<p>${key} : ${student[key]}</p>`)
//     }
// }
// delete student.group;
// student.mark = 12;
// console.log(student);
// student.mark = 10;
// student["mark"+" history"] = 8
// console.log(student);
// console.log(student["mark"+" history"])

// function Car(model, year)
// {
//     this.model = model;
//     this.year = year;
// }

// let ford = new Car("Ford",2010);
// let bmw = new Car("BMW",2015);
// console.log(ford);
// console.log(bmw);

// Car.prototype.color = "black";
// Car.prototype.getAge = () => new Date().getFullYear() - year; 

// ford.color = "white"

// console.log("Ford color : " + ford.color);
// console.log("BMW color : " + bmw.color);

// console.log(ford);
// console.log(bmw);


let ford = Object.create({
    calculateDistancePerYear: function() 
    {
        Object.defineProperty(this, 'distanceYear',{
            value:this.distance / this.age,
            configurable:false,
            enumerable:false
        });

    }
},{
    name:{
        value:"Ford",
        writable:true,
        configurable:false,
        enumerable:true,
    },
    year:{
        value:1999,
        writable:false,
        configurable:false,
        enumerable:true,
    },
    distance:{
        value:12345,
        writable:true,
        configurable:true,
        enumerable:false,
    },
    age:{
       get: function() {
        console.log("get value");
        return new Date().getFullYear() - this.year;
       },
       set: function(){
        console.log("edit value")
       } 
    }
});

console.log(ford);

// for (const key in ford) {
//    document.write(`<p> ${key} : ${ford[key]} </p>`)
// }

Object.keys(ford).forEach(function(key)
{
    console.log(key, ford[key])
})