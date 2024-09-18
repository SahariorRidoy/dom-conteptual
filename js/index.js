
const plusBtn =document.getElementById('plusButton');
plusBtn.style.backgroundColor='red'
plusBtn.style.fontSize='20px'
plusBtn.style.border='none'
plusBtn.style.color='white'
plusBtn.style.padding='15px'

const minusB =document.getElementById('minusButton');
minusB.style.backgroundColor='green'
minusB.style.fontSize='20px'
minusB.style.border='none'
minusB.style.color='white'
minusB.style.padding='15px'

sum=0;
function clickMe() {
    const h2=document.getElementById('counter');
    sum +=1;
    h2.innerText=sum;
}
// function clickMeDecrement() {
//     const h2=document.getElementById('counter');
    
//     if(sum>0){
//         sum -=1;
//     h2.innerText=sum;  
//     }
//     else {
//          h2.innerText="Counter Cannot be negative values"
//     }
// }

const minusBtn =document.getElementById('minusButton');
minusBtn.addEventListener('click',function(){
    const h2=document.getElementById('counter')
    if(sum>0){
        sum -=1;
    h2.innerText=sum;
    }
    else{
        h2.innerText="Counter Cannot be Negative Value"
    }
})