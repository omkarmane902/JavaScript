//!Check if two strings are anagrams.

let str1 = "cat";
let str2 = "act";


let string1 = str1.split("").sort().join("");
let string2 = str2.split("").sort().join("");


if (string1===string2) {
    console.log("This is anagrams");
    
} else {
    console.log("This is not anagrams");
    
}