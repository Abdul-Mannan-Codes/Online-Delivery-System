const quantity = document.querySelector('#quantity');
const quantityPara = document.querySelector('#qpara');
const phone = document.querySelector('#phone');
const otp = document.querySelector('#otp');
const orderBtn = document.querySelector('#order-btn');
let OTP = '1234';
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

quantity.addEventListener('input', (event)=>{
    let value = parseInt(quantity.value);
    switch(value){
        case 10:
            quantityPara.textContent = "5 KG";
            break;
        case 20:
            quantityPara.textContent = "8 KG";
            break;
        case 30:
            quantityPara.textContent = "10 KG";
            break;
        case 40:
            quantityPara.textContent = "12 KG";
            break;
        case 50:
            quantityPara.textContent = "15 KG";
            break;
        case 60:
            quantityPara.textContent = "18 KG";
            break;
        case 70:
            quantityPara.textContent = "20 KG";
            break;
        case 80:
            quantityPara.textContent = "22 KG";
            break;
        case 90:
            quantityPara.textContent = "23 KG";
            break;
        case 100:
            quantityPara.textContent = "25 KG";
            break;
        default:
            quantityPara.textContent = "0 KG";

    }
});
document.querySelector('#otp-btn').addEventListener('click',(event)=>{
    document.querySelector('.otp-div').classList.remove('d-none');
    document.querySelector('.otp-div label').textContent = "Enter OTP sent to: "+ phone.value;
});
otp.addEventListener('input',(event)=>{
    console.log('event worked');
    if(otp.value == '1234'){
        console.log('event cond worked');
        orderBtn.disabled = !true;
    }
    else{
        orderBtn.disabled = !false;
    }
});