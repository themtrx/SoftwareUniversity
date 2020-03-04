function solve (inp) {
    let inpArr = inp.slice();

    let toObj = inpArr.reduce((acc,curr) => {

        [item, num] = curr.split(' : ');
        num = Number(num);

        acc[item] =num;
        return acc;
    }, {})

    let sorting = Object.keys(toObj).sort((a,b) => a.localeCompare(b));
    
    let sortedObj = {};
    for (const key of sorting) {

        let firstLetter = key[0];
        
        if(!sortedObj[firstLetter]) {

            sortedObj[firstLetter]=[];
        }

        sortedObj[firstLetter].push({[key]:toObj[key]});
        
    }



    Object.keys(sortedObj).forEach((x) => {

        console.log(x);

        for (let i = 0; i < sortedObj[x].length; i++) {
            let test = sortedObj[x][i];

            console.log(`  ${Object.keys(test)[0]}: ${Object.values(test)[0]}`);
            
            
        }
        
    });
    
    
}

solve(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);