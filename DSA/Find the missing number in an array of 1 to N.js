let arr = [1,2,3,5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   
   sum+=arr[i];

}

let n = arr.length + 1 ;

let totalSum  = n *(n +1)/2

let missing = totalSum - sum;

console.log(missing);
