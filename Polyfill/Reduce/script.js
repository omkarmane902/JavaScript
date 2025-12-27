let array = [10,20,30,40];    

let reducepolyfill = (callbackfunction,initialValue)=>{
  
    let accumulator = initialValue ;


    for (let index = 0; index < array.length; index++) {
        
       accumulator = callbackfunction(accumulator,array[index],index,array);
       
    }
     return accumulator;
}

let modifyarray = reducepolyfill((accumulator,value,index,array)=>
                            {
                                return accumulator+=value;
                            },0);

console.log(modifyarray);
