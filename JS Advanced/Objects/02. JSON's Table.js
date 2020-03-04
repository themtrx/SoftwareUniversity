function solve (inp) {
    let jsonInp = inp.slice();
    let toHTML = '';

    for (let i = 0; i < jsonInp.length; i++) {
        let toObj = JSON.parse(jsonInp[i]);

        toHTML += `\n    <tr>\n        <td>${toObj.name}</td>\n        <td>${toObj.position}</td>\n        <td>${Number(toObj.salary)}</td>\n    </tr>`
    }

    console.log(`<table>${toHTML}\n</table>`);
    

}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);