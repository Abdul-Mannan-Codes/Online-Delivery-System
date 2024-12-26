const quantity = document.querySelector('#quantity');
const quantityPara = document.querySelector('#qpara');
const phone = document.querySelector('#phone');
const otp = document.querySelector('#otp');
const orderBtn = document.querySelector('#order-btn');
const stars = document.querySelectorAll('.stars .fa-star');
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
for(let star of stars){
    star.addEventListener('click',(event)=>{
        let starCount = parseInt(star.id.replace('star',''));
        let review = document.querySelector('#review-mark');
        for(let i=0;i<stars.length;i++){
            let s = document.querySelector(`#star${i+1}`);
            if(i+1 <= starCount){
                s.style.color = 'rgb(32, 231, 165)';
                s.style.textShadow = '0px 0px 10px rgb(32,231,165)';
            }
            else{
                s.style.color = '#fae3b8';
                s.style.textShadow = 'none';
            }
        }
        if(starCount == 1){
            review.textContent = "Poor";
        }
        else if(starCount == 2){
            review.textContent = "Not so good";
        }
        else if(starCount == 3){
            review.textContent = "Good";
        }
        else if(starCount == 4){
            review.textContent = "Very Good";
        }
        else if(starCount == 5){
            review.textContent = "Excellent";
        }
    })
}