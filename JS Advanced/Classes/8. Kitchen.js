class Kitchen {

    budget;
    menu ={};
    productsInStock ={};
    actionsHistory =[];

    constructor(budget) {
        this.budget = Number(budget);
    }

    loadProducts(productArr) {
        
        productArr.forEach((productPkg) => {
            
            let [productName, productQuantity, productPrice] = productPkg.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);

            if((this.budget - productPrice) >= 0) {

                this.budget -= productPrice;

                if(!this.productsInStock[productName]) {
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`)
            }else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }

        });

        return this.actionsHistory.join('\n').trim();

    }

    addToMenu(meal, productNeed, price) {

        if(!this.menu[meal]) {

            this.menu[meal] = {
                price: +price,
                products: productNeed
            };

            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in our menu, try something different.`
        }
    }

    showTheMenu() {
        let menuKeys = Object.keys(this.menu);

        if(menuKeys.length=== 0) {
            return "Our menu is not ready yet, please come later...";
        }else {
            
            let fullMenu = Object.keys(this.menu).map(meal=>`${meal} - $ ${this.menu[meal].price}`);

            return fullMenu.join('\n').trim() + '\n';
            
        }
    }

    makeTheOrder(meal){
        
        if(!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }else {

            let haveAllProducts = true;
            let productsArr = this.menu[meal].products;
            for (const singleProduct of productsArr) {

                let [productName, quant] = singleProduct.split(' ');
                quant =Number(quant);

                if (this.productsInStock.hasOwnProperty(productName)) {
                    let enoughQuant = this.productsInStock[productName] - quant>=0?true:false;

                    if(!enoughQuant) {
                        haveAllProducts = false;
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                    }
                    
                }else {
                    haveAllProducts = false;
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }


            if(haveAllProducts) {
                
                let productsArr = this.menu[meal].products;
                for (const usingProduct of productsArr) {
                    let [product, quant] = usingProduct.split(' ');
                    quant = Number(quant);
                    this.productsInStock[product]-= quant;
                }

                this.budget+=this.menu[meal].price;

                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }

        }

    }


}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

kitchen.makeTheOrder('frozenYogurt');



// class Kitchen {
//     constructor(budget) {
//         this.budget = +budget;
//         this.menu = {};
//         this.productsInStock = {}
//         this.actionsHistory = []
//     }
//     loadProducts(products) {  //["product quantity price", ...
//         let messageLog = []
//         for (let entry of products) {
//             entry = entry.split(' ')
//             //let [product, quantity, price] = entry.split(' ')
//             let price = +entry.pop()
//             let quantity = +entry.pop()
//             let product = entry.join(' ')
//             if (this.budget - price >= 0) {
//                 if (this.productsInStock[product]) this.productsInStock[product] += quantity
//                 else this.productsInStock[product] = quantity
//                 this.budget -= price
//                 messageLog.push( `Successfully loaded ${quantity} ${product}`) //test 3
//             } else {
//                 messageLog.push(`There was not enough money to load ${quantity} ${product}`)//test 4
//             }
//         }
//         //this.actionsHistory.push(messageLog.join('\n'))
//         this.actionsHistory = [...this.actionsHistory, ...messageLog]
//         return this.actionsHistory.join('\n')  //test 5 pass
       
//     }
//     addToMenu(meal, neededIngs, price) {  //neededIngs = ['product quantity', ...
//         if (!this.menu[meal]) {
//             // this.menu[meal] = [neededIngs, +price]
//             this.menu[meal] = {
//                 products: neededIngs,
//                 price: +price
//             }
//             return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals on the menu, other ideas?` //? no effect //TEST 6 ERROR
//         } else return `The ${meal} is already in our menu, try something different.` //test 7 - pass
 
//     }
//     showTheMenu() {
//         let toPrint = []
//         for (let key of Object.keys(this.menu)) {
//             toPrint.push(`${key} - $ ${this.menu[key].price}`)
//         }
//         if (!toPrint.length) return ('Our menu is not ready yet, please come later...') //test 8 pass
//         else {return toPrint.join('\n') + '\n'} // // TEST 9 ERROR
 
//     }
//     makeTheOrder(meal) {
//         if (!this.menu[meal]) return (`There is not ${meal} yet in our menu, do you want to order something else?`)
//         //check for products          
//         let ingredientsNeeded = this.menu[meal].products
//         for (let item of ingredientsNeeded) {  //item = 'product quantity'
//             item = item.split(' ')
//             let quantity = +item.pop()
//             let product = item.join(' ')
//             //let [product, quantity] = item.split(' ')
//             if (this.productsInStock[product] < quantity || !this.productsInStock[product]) {
//                 return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`) // test 15
//             }
//         }
 
//         for (let item of ingredientsNeeded) {
//             item = item.split(' ')
//             let quantity = +item.pop()
//             let product = item.join(' ')
//             this.productsInStock[product] -= quantity
//         } this.budget += this.menu[meal].price
//         return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`) //test 13 pass
//     }
// }