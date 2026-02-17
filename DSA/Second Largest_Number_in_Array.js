 
 let arr = [10, 20, 5, 40, 30];

  let first = -Infinity
  let second = - Infinity

 let fun = (arr,first,second)=>{
  
   

    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i]> first) {
            second =first
            first = arr[i];

            
        } else if(arr[i]> second) {
             second = arr[i];
        }
   
        
    }

    return second


 }

 console.log(fun(arr,first,second));
 