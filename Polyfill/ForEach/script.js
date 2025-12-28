let array = [10,20,30,40];    

let foreachpolyfill =(callbackfunction)=>{


    for (let index = 0; index < array.length; index++) {
    
       let value = callbackfunction(array[index],index,array) 
    }

};

let modifyarray = foreachpolyfill((value,index,array)=>
                            {
                             console.log(value + 200);
                            });
console.log(modifyarray);