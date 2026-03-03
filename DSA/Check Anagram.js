let fun=(str1,str2)=>{

let Nstr1 = str1.split("").sort().join("");

let Nstr2 = str2.split("").sort().join("");
if(Nstr1.length !== Nstr2.length)
{
   console.log(" not Anagram");
   return
   
}

if (Nstr1===Nstr2) {
    console.log("Anagram");
    
}
else{
     console.log(" not Anagram");
}

}

fun("listen","silent");

