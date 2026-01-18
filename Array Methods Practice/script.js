const users = [
  { name: "Amit", age: 22 },
  { name: "Ravi", age: 17 },
  { name: "Neha", age: 25 }
];

//! Get users above 18


const above18 = users.filter(user => user.age > 18);
console.log(above18);


//! Get all names

const names = users.map(user => user.name);
console.log(names);


//! 3. Find user named "Neha"

const nehaUser = users.find(user => user.name === "Neha");
console.log(nehaUser);

