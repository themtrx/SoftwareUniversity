function solve(arr) { 

    let num = Number(arr.slice(0,1));
    let newArr = arr.slice(1);

    for (let i = 0; i < newArr.length; i++) {
        const operation = newArr[i];


        if(operation ===  'chop') {
            num = num/2;
        }else if(operation === 'dice') {
            num = Math.sqrt(num);
        }else if(operation ==='spice') {
            num++;
        }else if(operation ==='bake') {
            num = num*3;
        }else if(operation==='fillet') {
            num = num - ((20*num)/100);
        }
        console.log(num);
    }


}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);