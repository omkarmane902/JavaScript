let  end = 20 ;

function  fibonacci(end) {
    
    let start  = 0 ;
    let second = 1

    for (let i = 0; i < end ; i++) {
        console.log(start);
        let next = start + second ;
        start = second;
        second = next
   
    }

}

fibonacci(end)