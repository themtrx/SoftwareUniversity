function solve (arr) {
    let nums = arr.slice();
    
    let result = nums.reduce((acc,curr) => {
        
        let last = acc[acc.length -1];

        if(curr>=last || last === undefined) {
            acc.push(curr);
        }

        return acc;
                
    }, [])
    
    console.log(result.join('\n'));
    

}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);