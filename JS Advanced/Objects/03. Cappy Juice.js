function solve (inp) {
    const products = inp.slice();

    const bottle = [];

    let ordered = products.reduce((acc, curr) => {

        [item, quant] = curr.split(' => ');
        quant = Number(quant);

        if(!acc[item]) {
            acc[item] = quant;
        }else {
            acc[item]+=quant;
        }

        if(acc[item]>=1000) {

            let bottles = Math.floor(acc[item]/1000);
            let bottleInQuant = bottles*1000;

            if(bottle.length<1) {
                bottle.push({[item]:bottles});

            } else {

                let productIndex = null;
                for (let i = 0; i < bottle.length; i++) {

                    let currentKey = Object.keys(bottle[i])[0];

                    if(currentKey === item){
                        productIndex = i;
                        break;
                    }

                }

                if(productIndex === null){
                    bottle.push({[item]:bottles});
                }else {
                    bottle[productIndex][item] += bottles;
                }

            }
            acc[item] = acc[item] - bottleInQuant;
        }

        return acc;

    }, {})

    for (const eachProduct of bottle) {
        console.log(`${Object.keys(eachProduct)[0]} => ${Object.values(eachProduct)[0]}`);
    }
}


solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);