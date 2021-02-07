var buttons=document.getElementsByTagName("button");
let op1="",op2="",operand="";
let displayText=document.getElementById("display").textContent;
for(let i=0;i<buttons.length;i++){
     buttons[i].addEventListener("click",function(){
           let buttonText=buttons[i].textContent;
           if(buttonText==="+"||buttonText==="-"||buttonText==="*"||buttonText==="/"||buttonText==="%"){
               op1+=displayText;
                operand+=buttonText;
               displayText="";
               document.getElementById("display").textContent=displayText; 
               document.getElementById("display").textContent=buttonText;
               // displayText=buttonText;
           }
           else if(buttonText==="AC"){
               displayText="";
               document.getElementById("display").textContent=displayText;
           }
           else if(buttonText==="="){
               op2+=displayText;
               var result=eval(op1+ operand + op2);
               displayText=result;
               document.getElementById("display").textContent=displayText;
           }
           else if(buttonText==="+/-"){
               if(displayText!=="+"||displayText!=="/"||displayText!=="*"||displayText!=="-"||displayText!=="%"||displayText!=="0"||displayText!=="."){
                    let number=parseFloat(displayText);
                    number=-1*number;
                    displayText=number.toString();
                    document.getElementById("display").textContent=displayText;
               }
           }
           else{
                displayText+=buttonText;
               document.getElementById("display").textContent=displayText;
           }
     });
}
