function jackpot ()  {

    let numbers = [];

    for (let a = 1; a <= 35; a++) {
        let numHolder = [];
        numHolder.push(a);
        for (let b = 1; b <= 35; b++) {
            if(!numHolder.includes(b)){
                numHolder.push(b);
                for (let c = 1; c <= 35; c++) {
                    if(!numHolder.includes(c)){
                        numHolder.push(c);
                        numbers.push(numHolder);
                        break;
                    }
                }
                break;
            
            }
        } 
        
    }

    console.log(numbers);
    

}


jackpot();