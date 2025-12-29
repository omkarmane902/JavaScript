//!🔹 What is a Copy in JavaScript?

//When we copy an object or array, JavaScript does not copy values directly.
// It copies memory reference (address) unless we tell it otherwise.
// Think of reference like a house address 🏠.


//!Shallow Copy
//Both variables point to the same object in memory
//Only one memory location
//Change in one → affects the other




let obj = {
    name:'omkar',
    age:18
};


let copyobj = obj;

copyobj.age=22;

console.log(obj);
