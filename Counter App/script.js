let count = document.getElementById("count");
let addbtn = document.getElementById("add");
let remove = document.getElementById("remove");
let reset = document.getElementById("reset");
let value = 0;

addbtn.onclick=()=>{
    value ++;
    count.innerText =value;

};

remove.onclick=()=>{
   if (value > 0) {
      value --;
      count.innerText = value;
   }
};

reset.onclick=()=>{

    value = 0;
    count.innerText = value;

};
