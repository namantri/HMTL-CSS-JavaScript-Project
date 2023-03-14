var num = document.querySelector('.loading');
var bg = document.querySelector('.bg');
let i=0;

    
let int =    setInterval(blur,30);

function blur(){
    i++;
    if(i>99){
        clearInterval(int);
    }
    // bg.style.filter = blur(ipx);
    num.innerHTML=`${i}%`;
    num.style.opacity=scale(i,0,100,1,0);
    bg.style.filter = `blur(${scale(i,0,100,30,0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }