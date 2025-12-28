let array = [10,20,30,40];    


let somepolyfill = (callbackfunction)=>{

for (let index = 0; index < array.length; index++) {
   
    if (callbackfunction(array[index],index,array)) {
        return true;  
    }   
}
return false
}



let modifyarray = somepolyfill((value,index,array)=>
                            {
                              return value > 20;
                            });
console.log(modifyarray);