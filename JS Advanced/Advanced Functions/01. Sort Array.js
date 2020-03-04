function solve (arr, type) {

    let result = sort();
    return result[type](arr);
    
    function sort (x) {
        return {
            asc:(x)=>x.sort((a,b) => a-b),
            desc:(x)=>x.sort((a,b) => b-a)
        }
    }


}

 console.log(solve([14, 7, 17, 6, 8], 'asc'));
 
