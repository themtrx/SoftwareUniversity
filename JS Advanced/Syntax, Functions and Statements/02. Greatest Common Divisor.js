function solve(num1,num2){

    let arr = [num1,num2].sort((a,b) => a-b);
    let [divisor,bigger] = arr;
    
    function gcd (big, small) {
        if(small===0) {
            console.log(big);
            return;
        }
        gcd(small, big%small);
    }
    gcd(bigger,divisor);
}

solve(2154, 458);