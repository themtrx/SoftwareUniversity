function solve (inp) {
    let inpCars = inp.slice();

    let toObj = inpCars.reduce((acc,curr) => {
        [brand,model,count] = curr.split(' | ');
        count = Number(count);

        if(!acc[brand]) {
            acc[brand] = {};
        }

        if(!acc[brand][model]){
            acc[brand][model] = count;
        }else {
            acc[brand][model] += count;
        }

        return acc;
    }, {})

    Object.keys(toObj).forEach((brand) => {
        console.log(brand);
        Object.keys(toObj[brand]).forEach((model) => {
            console.log(`###${model} -> ${toObj[brand][model]}`);
            
        })
        
    })

}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'Audi | Q6 | 1000',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);