// 7️⃣ Form Validation
// Validate:
// Name (not empty)
// Email (valid format)
// Password (min 6 chars)
// Show error messages below inputs


let name1 = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let error = document.getElementsByClassName("error");


btn.addEventListener('click',(e)=>{

    // e.preventDefault();
if(name1.value === "")
{
   error[0].innerText = "Name is required";
}


if (email.value === "") {
     error[1].innerText = "Email is required";
}
else if(!email.value.includes("@")||!email.value.includes("."))
{
    error[1].innerText = "Email is required";
}



 if (password.value === "")
     {
    error[2].innerText = "Password is required";
     } 
  else if (password.value.length < 6) 
    {
    error[2].innerText = "Min 6 characters";
    }


});





