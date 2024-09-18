sum=0;
function clickMe() {
    const h2=document.getElementById('counter');
    sum +=1;
    h2.innerText=sum;
}
function clickMeDecrement() {
    const h2=document.getElementById('counter');
    
    if(sum>0){
        sum -=1;
    h2.innerText=sum;  
    }
    else {
         h2.innerText="Counter Cannot be negative values"
    }
}