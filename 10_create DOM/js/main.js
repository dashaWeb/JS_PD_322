
let getRandom = () => Math.floor(Math.random() * 256);

let getRGB = () => `rgb(${getRandom()},${getRandom()},${getRandom()})`


function  getElement(flag = false)
{
    let div = document.createElement('div')
    div.style.width = div.style.height = '150px'
    let rgb = flag ? flag : getRGB();
    div.style.backgroundColor = rgb;
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    let p = document.createElement('p')
    p.textContent = rgb;
    div.append(p)
    //document.querySelector('.root').append(div)
    if(!flag)
        document.querySelector('.root').insertAdjacentElement('afterbegin',div)
    else
        document.querySelector('.root').insertAdjacentElement('beforeend',div)
}



document.querySelectorAll('button')[0].addEventListener('click',()=>{
    getElement();
})
document.querySelectorAll('button')[1].addEventListener('click',function(){
    this.remove();
    let color = document.createElement('input');
    color.setAttribute('type','color');
    color.addEventListener('change',()=>{
        getElement(color.value)
    })
    document.querySelector('body>p').append(color)
})

window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    
})

// let number = [4,5,8,6,5,9,6,10,25,58,4]
// console.log(number)
// console.log(number.map((numb)=> numb + 2))
// console.log(number.filter((numb)=> numb % 2 == 0))
// console.log(number.includes(6))






