const loadProducts = ()=> {
    for(let i=1;i<=6;i++){
        document.getElementById(`product${i}`).style.backgroundImage = `url(images/p${i}.jpg)`;
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    loadProducts();
});
document.addEventListener('scroll', (event)=>{
    let nav = document.querySelector('nav');
    if(window.scrollY > 300){
        nav.classList.add('stick');
    }
    else{
        nav.classList.remove('stick');
    }
});