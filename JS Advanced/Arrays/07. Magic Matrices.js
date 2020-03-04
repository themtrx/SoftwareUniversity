function solve (inp) {
    let matrix = inp.slice();

    let compareNum = matrix[0].reduce((a,b) => a+b, 0);
    let compare = true;

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((a,b) => a+b, 0);

        if(rowSum!==compareNum) {
            compare = false;
            break;
        }
        
        let sumHolder = 0;
        for (let j = 0; j < matrix.length; j++) { // matrix.length not matrix[i] length
            sumHolder += matrix[j][i]; // matrix[col number][row number]
        }

        if(sumHolder!==compareNum) {
            compare = false;
            break;
        }
    }

    console.log(compare);
}

solve([ [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]);