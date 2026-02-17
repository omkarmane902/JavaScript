let arr = [1, [2, [3, 4]], 5];


let flatten =(arr)=>{

return arr.flat(Infinity)

}

console.log(flatten(arr));
