let array = [10,20,30,40];    

let  findpolyfill =(callbackfunction)=>{

    for (let index = 0; index < array.length; index++) {
       
          if (callbackfunction(array[index])) {
            return array[index];
          }

    }

    return undefined;
 
}

let modifyarray = findpolyfill((value,index,array)=>{  
 return value > 20;
});

console.log(modifyarray);
