let array = [10,20,30,40];

let mappolyfill = (callbackfunction) =>{

    let temarray = [];

    for (let index = 0; index < array.length; index++) {
        
        let value = callbackfunction(array[index],index,array);
                  
              temarray.push(value);
        
    }
    return temarray;
}



let modifyarray = mappolyfill((value,index,array)=>
                             {
                                return value + 5;
                            });


console.log(modifyarray);
