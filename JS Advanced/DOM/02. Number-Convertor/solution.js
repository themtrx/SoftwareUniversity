function solve() {

    let decNum = document.getElementById('input');
    let selectTo = document.getElementById('selectMenuTo');
    selectTo.innerHTML = `
    <option selected value=""></option>
    <option  value="binary">Binary</option>
    <option  value="hexadecimal">Hexadecimal</option>
    `
    let btn = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    function toBin (dec) {
        let toStr = dec.toString(2);
        return toStr;
    }

    function toHex (dec) {
        let toStr = dec.toString(16);
        return toStr;
    }

    btn.addEventListener('click', (e) => {

        let decimal = Number(decNum.value);
        let convertTo = selectTo.value;

        if(convertTo === 'binary') {
            result.value = toBin(decimal);
        }else if (convertTo === 'hexadecimal') {
            result.value = toHex(decimal).toUpperCase();
        }
        
    })
}