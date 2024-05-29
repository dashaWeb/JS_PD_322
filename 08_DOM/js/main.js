

// let p_id = document.getElementById("text");
// let p_class = document.getElementsByClassName("style_text")
// // console.log(p_class)
// for (let i = 0; i < p_class.length; i++) {
//     p_class[i].style.color = "red"
// }
// let tag_p = document.getElementsByTagName("p")
// console.log(tag_p)

// for (let i = 0; i < tag_p.length; i++) {
//     tag_p[i].style.color = "green"
// }
// p_id.style.backgroundColor = "yellow"
// p_id.style.fontSize = "2em"
// p_id.style.padding = "20px 40px"


//let one = document.querySelector("div p:first-child")
//  let all = document.querySelectorAll("h1,h2,p")
// console.log(all)


// Events

// let h1 = document.querySelector("h1");

// h1.onmouseenter = function() 
// {
//     this.style.cursor = "pointer";
//     this.style.transition = "background-color 2s";
//     this.style.backgroundColor = "pink";

// }
// h1.onclick = function()
// {
//     this.style.color = "purple"
// }

// h1.addEventListener('click',() =>
// {
//     h1.style.background = "red"
// })

// let red = document.querySelector(".red");
// let blue = document.querySelector(".blue");
// let green = document.querySelector(".green");

// red.addEventListener('click',(e)=>{
//     alert("red")
// })

// blue.addEventListener('click',(e)=>{
//     alert("blue")
//     e.stopPropagation();
// })
// green.addEventListener('click',(e)=>{
//     alert("green")
//     e.stopPropagation();
// })

// document.querySelector('.btn').addEventListener('click',function(e){
//     e.preventDefault()
// })
let h1 = document.querySelector('h1')
// h1.classList.add("red")
// h1.classList.add("blue")
document.querySelector('h1').addEventListener('click', function () {
    //this.innerHTML = "B<br> y <br> e<br>"
    //this.innerText = "B<br> y <br> e<br>"
    //this.textContent = "B<br> y <br> e<br>"

    //this.className = "red blue"
    //this.classList.remove('red')
    //console.log(this.classList.contains('red'))
    this.remove()
})
document.querySelector('body').addEventListener('mousemove',(e) => {
    console.log(`x: ${e.clientX}; y:${e.clientY}`)
})