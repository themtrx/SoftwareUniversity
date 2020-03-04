function solve() {

    let [inpName, inpQuant, inpPrice] = Array.from(document.querySelectorAll('#add-new input[type="text"]'));
    let addBtn = document.querySelector('#add-new button');
    let productParent = document.querySelector('#products ul');
    let totalPrice = 0.00;
    
    let filterInp = document.querySelector('.filter #filter');
    let filterBtn = document.querySelector('.filter button');

    let myProductsParent = document.querySelector('#myProducts ul');
    let totalPriceH1 = Array.from(document.querySelectorAll('h1'))[1];
    let buyBtn = document.querySelector('#myProducts button');

    addBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addProduct(inpName.value,Number(inpQuant.value), Number(inpPrice.value));
    });

    filterBtn.addEventListener('click', itemFilter)

    function addProduct(name,quant,price){

            let newLi = document.createElement('li');

            let nameSpan = document.createElement('span');
            nameSpan.textContent = name;
            newLi.appendChild(nameSpan);

            let quantStrong = document.createElement('strong');
            quantStrong.textContent = `Available: ${quant}`;
            newLi.appendChild(quantStrong);

            let newDiv = document.createElement('div');
            newLi.appendChild(newDiv);

            let priceStrong = document.createElement('strong');
            priceStrong.textContent = price.toFixed(2);
            newDiv.appendChild(priceStrong);

            let addToListBtn = document.createElement('button');
            addToListBtn.textContent = 'Add to Client\'s List';
            newDiv.appendChild(addToListBtn);
            addToListBtn.addEventListener('click', moveToMyProducts);

            productParent.appendChild(newLi);
    }

    function itemFilter() {

        let addedProductsName = Array.from(productParent.querySelectorAll('li span'));

        for (const name of addedProductsName) {
            let searchIn = name.textContent.toLowerCase();
            let searchFor = filterInp.value.toLowerCase();

            if(searchIn.includes(searchFor)){
                name.parentNode.style.display = 'block';
            }else {
                name.parentNode.style.display = 'none';
            }
        }
    }
   
    function moveToMyProducts() {
        let btnParent = this.parentNode;
        let currentLi = btnParent.parentNode;
        let currentName = currentLi.querySelector('span').textContent;
        let currentQuant = currentLi.querySelector('strong');
        let currentPrice = currentLi.querySelector('div strong');

        let quantToNum = Number(currentQuant.textContent.split(' ')[1]);
        let priceToNum = Number(currentPrice.textContent);
        
        if(quantToNum -1 > 0) {

            myProductsCreate(currentName, priceToNum);

            totalPrice += priceToNum;
            totalPriceH1.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

            currentQuant.textContent = `Available: ${quantToNum-1}`;
        }else {
            myProductsCreate(currentName, priceToNum);
            totalPrice += priceToNum;
            totalPriceH1.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

            currentLi.parentNode.removeChild(currentLi);
        }
        
    }

    function myProductsCreate(name, price) {

        let myProductLi = document.createElement('li');
        myProductLi.textContent = `${name}`;
        let myProductPirce =document.createElement('strong');
        myProductPirce.textContent = `${price.toFixed(2)}`;
        myProductLi.appendChild(myProductPirce);
        myProductsParent.appendChild(myProductLi);
    }

    buyBtn.addEventListener('click', buyProducts);

    function buyProducts() {
        let productList = this.parentNode.querySelector('ul');
        let allPorducts = Array.from(this.parentNode.querySelectorAll('ul li'));

        for (const product of allPorducts) {
            productList.removeChild(product);
        }

        totalPrice = 0;
        totalPriceH1.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
    }
}