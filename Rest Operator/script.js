                                 //!Rest Operat

let obj = {
    name:'omkar',
    age:22,
    email:'omkarmane123@gmail.com'
};  

let{name, ...rest} = obj;

console.log(name);
console.log(rest);

