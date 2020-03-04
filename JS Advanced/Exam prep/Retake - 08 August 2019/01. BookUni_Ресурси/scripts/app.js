function solve() {
    
    let inpTitle = document.querySelector('form input[type="text"]');
    let [inpYear, inpPrice] = Array.from(document.querySelectorAll('form input[type="number"]'));
    let addBook = document.querySelector('form button');
    let shelfSection = Array.from(document.querySelectorAll('#outputs section'));
    let oldBooks = shelfSection[0].querySelector('.bookShelf');
    let newBooks = shelfSection[1].querySelector('.bookShelf');
    let storeProfit = Array.from(document.querySelectorAll('h1'))[1];
    let profit = 0;

    addBook.addEventListener('click', (e) => {
        e.preventDefault();
        addBtn(inpTitle.value, inpYear.value, inpPrice.value)
    });

    function addBtn (title,year,price) {
        
       year = Number(year) >0?Number(year):false;
       price =  Number(price) >0?Number(price):false;

       let discount = price - (price*0.15);

       if(title && year && price){

            if(year>=2000) {
                addNewBook(title,year,price, discount);
                
            }else {
                
                addOldBook(title,year,discount);
            }
       }
    }

    function profitEdit () {
        storeProfit.textContent = `Total Store Profit: ${profit.toFixed(2)} BGN`
    }

    function addNewBook (newTitle, newYear, newPrice, withDiscount){

        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', 'book');

        let bookName = document.createElement('p');
        bookName.textContent = `${newTitle} [${newYear}]`;
        bookDiv.appendChild(bookName);

        let buyBtn = document.createElement('button');
        buyBtn.textContent = `Buy it only for ${newPrice.toFixed(2)} BGN`
        bookDiv.appendChild(buyBtn);

        buyBtn.addEventListener('click', (e) => {
        let thisBookDiv = e.target.parentNode;
        thisBookDiv.parentNode.removeChild(thisBookDiv);
        profit+= newPrice;
        profitEdit()
        });

        let moveBtn = document.createElement('button');
        moveBtn.textContent = 'Move to old section';
        bookDiv.appendChild(moveBtn);

        moveBtn.addEventListener('click', (e) => {
        let thisBookDiv = e.target.parentNode;
        
        addOldBook (newTitle,newYear, withDiscount);
        thisBookDiv.parentNode.removeChild(thisBookDiv);
        });
    
        newBooks.appendChild(bookDiv);

    }


    function addOldBook (newTitle,newYear, newPrice) {

        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', 'book');

        let bookName = document.createElement('p');
        bookName.textContent = `${newTitle} [${newYear}]`;
        bookDiv.appendChild(bookName);

        let buyBtn = document.createElement('button');
        buyBtn.textContent = `Buy it only for ${newPrice.toFixed(2)} BGN`
        bookDiv.appendChild(buyBtn);

        buyBtn.addEventListener('click', (e) => {
        let thisBookDiv = e.target.parentNode;
        thisBookDiv.parentNode.removeChild(thisBookDiv);
        profit+= newPrice;
        profitEdit()
        });
    
        oldBooks.appendChild(bookDiv);
    }

}