function solve(arr) {
    let inp = [...arr];
    let obj={};

    for(let i=0; i<inp.length; i+=2) {
        obj[inp[i]]=Number(inp[i+1]);
    }

    console.log(obj);
    

}
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);