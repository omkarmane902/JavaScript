let str = "javascript";


let fun =(str)=>{
 let arr = str.toUpperCase().split("")
 let vcount = 0;
 let Ccount = 0;
 for (let i = 0; i < arr.length; i++) {
    
     if (arr[i] == 'A'||arr[i] == 'E'||arr[i] == 'I'||arr[i] == 'O'||arr[i] == 'U') {
        
         vcount ++;
     } else {
         Ccount ++;
     }
 }  
 return{
    vowels:vcount,
    consonants:Ccount
 }
   
}
console.log(fun(str));
