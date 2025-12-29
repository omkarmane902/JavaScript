//!Deep Copy
// Deep copy means:
// A new object is created
// Different memory location
// Changes do NOT affect each other

//! 🧠 Why this works?
// JSON.stringify() → converts object to string
// JSON.parse() → creates a new object
// New memory is created



let obj = {
    name:'omkar',
    age:18
};



let copyobj = JSON.parse(JSON.stringify(obj));

copyobj.age = 22;


console.log(copyobj);

console.log(obj);



