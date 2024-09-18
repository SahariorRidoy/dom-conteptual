const submit=document.getElementById('click-button').addEventListener('click',function(){
    const inputValue=document.getElementById('text-input')
   const inputText=(inputValue.value);
   /**
    * Make a p element and append it to the section
    */
   const p=document.createElement('p');
   p.innerText=inputText;
   const section= document.getElementById('container');
section.appendChild(p);


/*
 * Show to a existing h2 element
 */
//    const showHere= document.getElementById('show-here');
//    showHere.innerText=inputText;
    
})

