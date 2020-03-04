function solve (str,num1,num2) {
    let fruit = str;
    let weight = num1;
    let price = num2;

    let toKilo = num1/1000;
    let totalPrice = toKilo * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${toKilo.toFixed(2)} kilograms ${str}.`);
    
}

solve('orange', 2500, 1.80);