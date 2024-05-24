

// let numbers = new Array(5,5,8,4,9,true);
// console.log(numbers)

// let colors = ["red","green","blue","yellow",45,false,{name:"test"}, [1,2,5,8]];
let colors = ["red","green","blue" , "gold","yellow"];
console.log(colors)
// colors.forEach((item) => {
//     document.write(`<p style = "text-align:center; font-size:2em; background-color:${item}; padding:25px"> ${item} </p>`)
// })
document.write("<hr />")

document.write(`<p style = "font-size:2em; margin-left:50px;"> ${colors.join(" <br> ")} </p>`)

colors.push("gold","lime")
document.write("<hr /> <h1 style='text-align:center;'>Push</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${colors.join(" <br> ")} </p>`)

colors.unshift("brown","magenta");
document.write("<hr /> <h1 style='text-align:center;'>Unshift</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${colors.join(" <br> ")} </p>`)

colors.pop();
document.write("<hr /> <h1 style='text-align:center;'>Pop</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${colors.join(" <br> ")} </p>`)

colors.shift();
document.write("<hr /> <h1 style='text-align:center;'>Shift</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${colors.join(" <br> ")} </p>`)

let slicecolor = colors.slice(0,3)
document.write("<hr /> <h1 style='text-align:center;'>Slice</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${slicecolor.join(" <br> ")} </p>`)

let splicecolor = colors.splice(0,3,"orange")
document.write("<hr /> <h1 style='text-align:center;'>Splice</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${colors.join(" <br> ")} </p>`)

console.log(colors.indexOf("gold"))
console.log(colors.lastIndexOf("gold"))

colors.sort()
document.write("<hr /> <h1 style='text-align:center;'>Sort</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${colors.join(" <br> ")} </p>`)

let numb = [8,5,7,4,11,2,56,3,22,5,9]
numb.sort((a,b)=>{
    if(a < b) return -1;
    if(a>b) return 1;
    if(a == b) return 0
});
document.write("<hr /> <h1 style='text-align:center;'>Sort</h1>")
document.write(`<p style = "font-size:2em; margin-left:50px;"> ${numb.join(" <br> ")} </p>`)

console.log(numb.length)

console.log(colors.concat(numb))

let res = [
    ...numb,
    true,
    ...colors
]
res = [numb,true,colors]
console.log(res)

for (const iterator of res) {
    document.write(`<p style = "font-size:2em; margin-left:50px;"> ${iterator} </p>`)
}