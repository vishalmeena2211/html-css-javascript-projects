const btn = document.querySelectorAll('.btn');
console.log("hello");
btn[0].addEventListener('click',()=>{
    btn[0].classList.add('active');
    btn[1].classList.remove('active');
});
btn[1].addEventListener('click',()=>{
    btn[1].classList.add('active');
    btn[0].classList.remove('active');
});
