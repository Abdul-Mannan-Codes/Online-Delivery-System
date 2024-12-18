const loadProducts = ()=> {
    for(let i=1;i<=6;i++){
        document.getElementById(`product${i}`).style.backgroundImage = `url(images/p${i}.jpg)`;
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    console.log("Loaded")
    loadProducts();
});