let array = [10,20,30,40,50,60];

let filterpolyfill = (callbackfunction)=>{


       let temarray = [];

       for (let index = 0; index < array.length; index++) {


        if (callbackfunction(array[index],index,array)) {
            
           temarray.push(array[index]);
        }
           
   
      }
       return temarray;

    }


let modifyarray = filterpolyfill((value,index,array)=>{

    return value > 20;
})

console.log(modifyarray);


