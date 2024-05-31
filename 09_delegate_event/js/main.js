
let container = document.querySelector('.container')


container.addEventListener('click',(e)=>
{
    //console.log(e.target)
    if(e.target.tagName == 'P')
    {
        e.target.classList.add('style')
    }
    if(e.target.tagName == "LI")
    {
        e.target.classList.add('styleLi')
    }
    if(e.target.classList.contains('class'))
    {
        
    }
})