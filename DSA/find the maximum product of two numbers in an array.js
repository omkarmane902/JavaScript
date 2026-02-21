let arr = [1,2,3,4,5,6];

let maxproduct = (arr)=>{

    let sortArr =  arr.sort((a,b)=>b-a);
    return sortArr[0] * sortArr[1];

}

console.log(maxproduct(arr));





