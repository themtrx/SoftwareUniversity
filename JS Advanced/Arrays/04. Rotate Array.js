function solve (arr) {

    let amount = Number(arr.pop());

    if (amount%arr.length !==0) {
        for (let i = 0; i < amount; i++) {
            arr.unshift(arr.pop());
        }
    }
    console.log(arr.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'8']);