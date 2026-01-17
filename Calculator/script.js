
let btn = document.getElementById('btn');
let result = document.getElementById("result");

btn.onclick=()=>
{
    let value1 = document.getElementById("num1").value;
    let value2 = document.getElementById("num2").value;
    let operator = document.getElementById('operator').value;


 

    let output;

    switch (operator) {
         case "+":
             output = value1 + value2;
            break;
         case "-":
             output = value1 - value2;
            break;
         case "*":
            output = value1 * value2;
            break;
         case "/":
             if (value2===0) {
                 result.innerText = "Cannot divide by zero";
                 return;
                }
                
                output = value1 / value2;
            break;    
       
    }
     result.innerText ="Result: " + output;

}