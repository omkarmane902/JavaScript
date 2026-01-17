let click = document.getElementById("click");
let result = document.getElementsByClassName("result")[0];

click.onclick =()=>{

     let value = document.getElementById("input").value;

     let rev = value.split("").reverse().join("");

     result.innerText = rev;
     
     

};
