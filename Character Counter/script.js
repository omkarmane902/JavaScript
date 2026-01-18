let text = document.getElementById("text");
let count = document.getElementById("count");
let error = document.getElementById("error")

text.addEventListener("input", (e) => {

if(e.target.value.length<=100)
{
count.innerText = e.target.value.length;
}

if (e.target.value.length >100) {
    error.innerText = "Enter less than 100 character"
}
  if (e.target.value.length > 100) {
    e.target.value = e.target.value.slice(0, 100);
  }

});



