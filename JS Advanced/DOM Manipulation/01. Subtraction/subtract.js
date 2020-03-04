function subtract() {
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    let result = document.querySelector('#result');

    result.textContent = Number(firstNumber) - Number(secondNumber);


}