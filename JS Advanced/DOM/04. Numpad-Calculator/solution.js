function solve() {

    let keys = document.querySelector('.keys');
    let output = document.querySelector('#expressionOutput');
    let result = document.querySelector('#resultOutput');
    let clear = document.querySelector('.clear');

    let oprators = ['+','-','/','*'];
    const operations = {
        '+': (n1,n2)=> (Number(n1)+Number(n2)),
        '-': (n1,n2)=> (Number(n1)-Number(n2)),
        '*': (n1,n2)=> (Number(n1)*Number(n2)),
        '/': (n1,n2)=> (Number(n1)/Number(n2))
    };

    clear.addEventListener('click', e => {
        output.innerHTML = '';
        result.innerHTML = '';
    });


    keys.addEventListener('click', (e) => {
        let clicked = e.target.value;

        if (!clicked){
            return;
        }

        if(clicked === '='){
            [firstNum, op, secondNum] = output.innerHTML.split(' ');

            if(secondNum !== undefined && secondNum!=='') {
                result.innerHTML = operations[op](firstNum,secondNum);
            }else {
                result.innerHTML = 'NaN'
            }

            return;
        }

        if(oprators.includes(clicked)) {
            output.innerHTML += ` ${clicked} `;
            return;
        }

            output.innerHTML += clicked;
        
    })
}