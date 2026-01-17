let btn = document.getElementById("btn");
let result = document.getElementsByClassName("result")[0];

btn.onclick = () => {
  let value = document.getElementById("inputfild").value;

  if (value === "") {
    result.innerText = "Please enter a number";
    return;
  }

  if (value % 2 === 0) {
    result.innerText = "Even Number";
  } else {
    result.innerText = "Odd Number";
  }
};
