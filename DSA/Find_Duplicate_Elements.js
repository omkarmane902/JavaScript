let arr = [10,15,10,20,25,15,30];

let result = arr.filter((val,index,selfarr)=>{
    return selfarr.indexOf(val) !== index;
})

console.log(result);

