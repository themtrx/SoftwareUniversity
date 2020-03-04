function solve (num) {
    let arr = String(num).split('');
    let sum = arr.map(Number).reduce((a,b) => a+b);

    let same = true;
    let first = Number(arr[0]);
    for (const num of arr) {
        
        if(Number(num)!==first) {
            same = false;
        }
    }

    console.log(same);
    console.log(sum);
    
}

solve(1234);