// alert("Hello")
var open = document.getElementById("open");
var close = document.getElementById("close");
const cont = document.querySelector('.container');
open.addEventListener('click',()=>{
    cont.classList.add('show-nav');
})
close.addEventListener('click',()=>{
    cont.classList.remove('show-nav');
})
