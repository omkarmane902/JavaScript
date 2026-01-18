const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let value = []; 


addBtn.onclick =()=>{

    if(input.value==="")
    {
        alert("Enter the task")
    }


    if (input.value === input.value) {
        
        value.push(input.value);

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.innerText = input.value;

        let removebtn = document.createElement("button");

        removebtn.innerText = "❎"

        removebtn.onclick=()=>{
            li.remove();
        }
        li.appendChild(span);
        li.appendChild(removebtn);
        list.appendChild(li);
    }

     input.value = "";

}
