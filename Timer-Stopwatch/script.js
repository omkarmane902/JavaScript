let hourhtml = document.getElementById("hour");
let minuteshtml = document.getElementById("minutes");
let secondhtml = document.getElementById("second");

let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let milliseconds = 0
let minutes = 0;
let second = 0;
let hour= 0;
let timer = null;

startbtn.onclick=()=>{


   timer =setInterval(()=>{
    second ++;
    if(second == 60)
    {   second = 0;
        minutes++;
        
    }
    if (minutes == 60 ) 
    {
        minutes = 0;
        hour ++
    }   

    if(hour == 12)
    {
       hour = 0;
       minutes = 0;
       second = 0;
    }

      secondhtml.innerText = second;
      minuteshtml.innerText = minutes;
      hourhtml.innerText =  hour;  
    
},1000)

};

stopbtn.onclick =()=>{
  
    clearInterval(timer);
};

resetbtn.onclick =()=>{
   
      minutes = 0;
      second = 0 ;
      hour     

      secondhtml.innerText = 0;
      minuteshtml.innerText = 0;
      hourhtml.innerText = 0; 

      clearInterval(timer);


};



