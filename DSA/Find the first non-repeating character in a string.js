
let string = "i love javascript";

for (let i = 0; i < string.length; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
       
        if (string[i]===string[j]) {
         count++;
        }
        
    }

    if(count === 1)
    {
            console.log("First non-repeating character:", string[i]);
            break;
    }
    
}
