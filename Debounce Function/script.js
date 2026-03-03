let getdata =()=>{

    let data = document.getElementById("input").value;
    console.log(data);
    
}

let Debounce =(getdata,delay)=>{
    let time;
   return function(...args){
    time = setTimeout(()=>{
    clearTimeout(time)
          getdata.applay(this,args)
    },delay)
      
   }

}

let newDebounce = Debounce(getdata,3000)


