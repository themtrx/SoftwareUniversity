function solve() {

	let inputText = document.querySelector('#input');
	let result = document.querySelector('#resultOutput');

		let str = inputText.value;

		let strSum = str.split('')
					.map(Number)
					.reduce((a,b) => a+b,0)
					.toString();

		while(Number(strSum)>9) {
			strSum = strSum.split('')
					.map(Number)
					.reduce((a,b) => a+b, 0)
					.toString();
		}
		
		let delBeginEnd = str.substring(strSum, str.length-strSum);
		let toEight = delBeginEnd.match(/[0-1]{1,8}/g);
		let toText = [];

		for (const binary of toEight) {
			let toDecimal = parseInt(binary, 2);

			let intoLetter = String.fromCharCode(toDecimal);

			toText.push(intoLetter);
		}
		let onlyLetters = /[A-Za-z ]/
		result.textContent = toText.filter((x) => x.match(/[A-Za-z ]/)).join('');
	
}