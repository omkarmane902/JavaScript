let array = [10,73,46,85,32,547555];

let sortpolyfill=(array)=>{


    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            
            if(array[j]>array[j+1])
            {
               let temp = array[j]; 
               array[j] = array[j+1];
               array[j+1] = temp;
            };
            
        }
        
    }
    return array;
}


let modifyarray = sortpolyfill(array);

console.log(modifyarray);
