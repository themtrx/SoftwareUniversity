function solve (inp) {
    let inpArr = inp.slice();

    let toObj = inpArr.reduce((acc,curr) => {

        [sysName, comp, subComp] = curr.split(' | ');
        
        if(!acc[sysName]) {
            acc[sysName]= {[comp]:[]}
            
        } 

        if (!acc[sysName][comp]) {
            acc[sysName][comp] = [];
        }
        
        acc[sysName][comp].push(subComp);

        return acc;
    }, {})

    Object.keys(toObj).sort((a,b) => {

        let aLength = Object.keys(toObj[a]).length;
        let bLenght = Object.keys(toObj[b]).length;

         return bLenght - aLength || a.localeCompare(b);
    }).forEach((key) => {
        console.log(key);

        Object.keys(toObj[key]).sort((a,b) => {
            return toObj[key][b].length - toObj[key][a].length;
        }).forEach((sub) => {
            console.log(`|||${sub}`);

            toObj[key][sub].forEach((el) => console.log(`||||||${el}`));
            
        });
        
    })
    
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);