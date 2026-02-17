let obj = {a:1, b:{c:2}};

let copy = JSON.parse(JSON.stringify(obj))

console.log(copy);

