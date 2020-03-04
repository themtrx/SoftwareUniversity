function solve (inp) {
    let arr = inp.slice();
    let obj = [];

    for (let i = 0; i < arr.length; i++) {
        let infoToArr = arr[i].split(' / ');
        let heroName = infoToArr[0];
        let heroLevel= Number(infoToArr[1]);
        let heroItems = [];
        if(infoToArr[2]) {
            heroItems = infoToArr[2].split(', ');
        }

        let fullHero = {
            name:heroName,
            level:heroLevel,
            items:heroItems
        }
        obj.push(fullHero);
    }
        console.log(JSON.stringify(obj));


}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);