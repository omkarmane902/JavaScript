let arr = [];

let inputfildtask = () => {

    let input = document.getElementById("input");
    let inputval = input.value;
    let list = document.getElementById("list");

    if (inputval === "") {
        alert("Enter Task");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    let span1 = document.createElement("span");
    let btn = document.createElement("span");
    span1.innerText = "✔️";
    span.innerText = "❌";
    btn.innerText = "👈";
    li.innerText = inputval;

    span.onclick = function () {
        li.remove();
    };

    span1.onclick = function () {
       li.style.textDecoration = "line-through"
    };

    btn.onclick = function () {
      input.value = "inputval";  
      li.remove();
    };

    li.appendChild(span);
    li.appendChild(span1);
    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
}