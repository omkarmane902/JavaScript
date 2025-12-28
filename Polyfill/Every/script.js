let array = [10,20,30,40];    


let everypolyfill = (callbackfunction)=>{

for (let index = 0; index < array.length; index++) {
   
    if (!callbackfunction(array[index],index,array)) {
        return false;  
    }   
}
return true
}

let modifyarray = everypolyfill((value,index,array)=>
                            {
                              return value >= 20;
                            });
console.log(modifyarray);