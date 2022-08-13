let btn = document.querySelector('.btn');

btn.addEventListener('mousemove',(e)=>{
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--x',x + 'px');
    btn.style.setProperty('--y',y + 'px');
})
