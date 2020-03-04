function solve (inp) {
    console.log(

        inp.filter((el,i,arr) => arr.indexOf(el) === i)
        .sort((a,b) => { 
            let aLen = a.length;
            let bLen = b.length;

            return aLen-bLen || a.localeCompare(b);
            })
        .join('\n')
    );
    
}

solve(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);