let btn = document.getElementById('btn');
let result = document.getElementById('result');


btn.onclick=()=>{
    let value = document.getElementById('numbers').value;
    
    let arr = value.split(',').map(Number);
     
   let largest = Math.max(...arr);

    result.innerText = largest; 
    
    
};