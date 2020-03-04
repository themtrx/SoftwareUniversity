function solve (...arg) {

    let typeCount = arg.reduce((acc,curr) => {
        let elType = typeof curr;

        if(!acc[elType]) {
            acc[elType] = 0;
        }

        acc[elType]++;

        console.log(`${elType}: ${curr}`)
        
        return acc;
    },{});

    Object.keys(typeCount)
            .sort((a,b) => {
                return typeCount[b] -typeCount[a];
            })
            .forEach((el) => {
                console.log(`${el} = ${typeCount[el]}`);
            })

}

solve(42, 15, 'cat');