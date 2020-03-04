class ChristmasDinner {

    constructor(budget){
       this.budget = budget;
       this.dishes = [];
       this.products = [];
       this.guests = {};
    }

    get budget(){
        return this._budget;
    }

    set budget(value){
        if(value<0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping(product){
        let [type, price] = product;    
        price = Number(price);

        if(price>this._budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this._budget-=price;
        
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe){

        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;

        let weHaveAll = true;

        for (const product of productsList) {

            if(!this.products.includes(product)){
                weHaveAll = false;
                break;
            }
        }

        if(!weHaveAll) {
            throw new Error('We do not have this product');
        }

        this.dishes.push({recipeName, productsList});

        return `${recipeName} has been successfully cooked!`;

    }

    inviteGuests(name, dish){

        let currentDish = this.dishes.find((x) => x.recipeName === dish);

        if(!currentDish) {
            throw new Error('We do not have this dish');
        }

        if(this.guests[name]) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let result = '';
        Object.keys(this.guests)
                .forEach((guest) => {
                    let dish = this.guests[guest];
                    result+=`${guest} will eat ${dish}, which consists of`
                    let products = this.dishes.find((x) => x.recipeName === dish);
                    result+=` ${products.productsList.join(', ')}\n`
                });

        return result.trim();
    }

}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);

dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);


dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
})

dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt
