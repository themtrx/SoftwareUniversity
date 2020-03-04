function solve (inp) {

    let inpArr = inp.slice()
                .map((x) => JSON.parse(x).sort((a,b) => b-a)) //convert string into arrays and sort their elements
                .map((x) => JSON.stringify(x)) //make it again string so we can comapre arrays as strings
                .filter((el,i,arr) => arr.indexOf(el) === i) //compare arrays and remove the same one
                .sort((a,b) => { //sort the main elemnts by their lenght in ascending order
                    let aLen = a.length;
                    let bLen = b.length;
                    return aLen - bLen;
                })
                .map((arr) => JSON.parse(arr))// make arrays great again
                .forEach(arr => console.log(`[${arr.join(', ')}]`)); //log each one
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);

