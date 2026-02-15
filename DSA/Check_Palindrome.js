
let str = "madam";

function fun(str) {
    
    let rev = str.split("").reverse().join("");

    if(str === rev)
    {
            console.log("This is Palindrome string ");
            
    }
    else
    {
            console.log("This is not Palindrome string ");
    }
}

fun(str);