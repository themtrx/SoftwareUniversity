let Warehouse = require('./main');
let assert = require('chai').assert;

describe ('Checking PaymentPackage class functionality' , () => {

    let actual;
    let expect;

    beforeEach(() => {
        actual = null;
        expect = null;
        theClass = new Warehouse(2);
    });

    describe('Class properties', () => {

        it('Instance of the class with negative prop', () => {
            actual = () => new Warehouse(-3);
            expect = 'Invalid given warehouse space';
            assert.throw(actual, expect, 'Expecting error cause of negative num');
        });
        it('Instance of the class with 0 properie passed', () => {
            actual = () => new Warehouse(0);
            expect = 'Invalid given warehouse space';
            assert.throw(actual, expect, 'Expecting error cause of negative num');
        });
        it('Instance of the class with non numper prop', () => {
            actual = () => new Warehouse(true);
            expect = 'Invalid given warehouse space';
            assert.throw(actual, expect, 'Expecting error cause of negative num');
        })
        it('Instance of the class with empty prop' , ()=> {
            actual = () => new Warehouse();
            expect = 'Invalid given warehouse space';
            assert.throw(actual, expect, 'Expecting error cause of negative num');
        })
        it('Instance with correct props', () => {
            let actualCapacity = theClass._capacity;
            let expectCapacity = 2;
            let actualProducts = JSON.stringify(theClass.availableProducts);
            let expectProducts = JSON.stringify({Food: {}, Drink: {}});
            assert.equal(actualCapacity, expectCapacity, 'Expecting capacity to be number');
            assert.equal(actualProducts, expectProducts, 'Expecting products to be object');
        })
    });
    describe('Method addProduct()', () => {

        it('Throw error cause not enough capacity', () => {
            actual = () => theClass.addProduct('Foоd', 'Test', 1000);
            expect = 'There is not enough space or the warehouse is already full';
            assert.throw(actual,expect, 'Expecting error casue of not neough capacity');
        });
        it('Correct usage of the method', () => {
            theClass.addProduct('Food', 'Test', 1);
            actual = JSON.stringify(theClass.availableProducts.Food);
            expect = JSON.stringify({Test: 1});
            assert.equal(actual, expect, 'Expecting object with prduct and quant');
        })
        it('Correct usage of the method', () => {
            theClass.addProduct('Food', 'Test', 1);
            theClass.addProduct('Food', 'Test', 1);
            actual = JSON.stringify(theClass.availableProducts.Food);
            let actulaProp = theClass.availableProducts.Food.Test;
            let expectProp = 2;
            expect = JSON.stringify({Test: 2});
            assert.equal(actulaProp, expectProp,'Expecting Food-> Test quant');
            assert.equal(actual, expect, 'Expecting object with prduct and summed quant');
        })
        it('Correct usage but with zero quant', () => {
            theClass.addProduct('Food', 'Test', 0);
            actual = JSON.stringify(theClass.availableProducts.Food);
            let actulaProp = theClass.availableProducts.Food.Test;
            let expectProp = 0;
            expect = JSON.stringify({Test: 0});
            assert.equal(actulaProp, expectProp,'Expecting Food-> Test quant');
            assert.equal(actual, expect, 'Expecting object with prduct and summed quant');
        })
    })
    describe('Method orderProducts(type)', () => {
        it('Check what is method is returning with correct values', () => {
            theClass = new Warehouse(50);
            theClass.addProduct('Food', 'Patato', 10);
            theClass.addProduct('Food', 'Ice-cream', 1);
            theClass.addProduct('Food', 'Chicken', 3);
            actual = JSON.stringify(theClass.orderProducts('Food'));
            expect = JSON.stringify({'Patato': 10,'Chicken': 3,'Ice-cream': 1 });
            assert.equal(actual,expect, 'Result should be object with ordered products');
        });
        it('Check it with empty type', () => {
            actual =  JSON.stringify(theClass.orderProducts('Drink'));
           expect = '{}';
           assert.equal(actual, expect, 'Result should be empty object');
        });
    });
    // describe('Method occupiedCapacity()', () => {
    //     it('Check capacity if there is nothing', () => {
    //         actual = theClass.occupiedCapacity();
    //         expect = 0;
    //         assert.equal(actual, expect, 'Expecting 0');
    //     });
    //     it('Check capacity if there is something', ()=> {
    //         theClass.addProduct('Food', 'Test', 1);
    //         actual = theClass.occupiedCapacity();
    //         expect = 1;
    //         assert.equal(actual, expect, 'Expecting products number')
    //     });
        
    //     it('Negative number', () => {
    //         theClass.addProduct('Food', 'Test', -1);
    //         actual = theClass.occupiedCapacity();
    //         expect = -1;
    //         assert.equal(actual,expect, 'Expecting negative number');
    //     });

    // });
    describe('Method revision()', () => {

        it('Test with empty warehous', () =>  {
            actual = theClass.revision();
            expect = 'The warehouse is empty';
            assert.equal(actual, expect, 'Expecting empty string');
        });
        it('Test with existing products', () => {
            theClass = new Warehouse(30);
            theClass.addProduct('Food', 'Patato', 10);
            theClass.addProduct('Food', 'Ice-cream', 1);
            theClass.addProduct('Food', 'Chicken', 3);
            theClass.addProduct('Drink', 'Vodka', 1);
            actual = theClass.revision();
            expect = 'Product type - [Food]\n- Patato 10\n- Ice-cream 1\n- Chicken 3\nProduct type - [Drink]\n- Vodka 1';
            assert.equal(actual,expect, 'Expecting string');
        });
    });
    describe('Method scrapeAProduct(product, quantity)', () => {

        it('Check for not existing product',() => {
            actual = () => theClass.scrapeAProduct('test', 10);
            expect = 'test do not exists';
            assert.throw(actual, expect, 'Expecting error');
        });

        it('Check with existing product', () => {
            theClass = new Warehouse(30);
            theClass.addProduct('Food', 'Patato', 10);
            theClass.addProduct('Food', 'Ice-cream', 1);
            theClass.addProduct('Food', 'Chicken', 3);
            theClass.addProduct('Drink', 'Vodka', 1);
            theClass.scrapeAProduct('Patato', 5);
            let actualProp = theClass.availableProducts.Food.Patato;
            let expectProp = 5;
            actual = JSON.stringify(theClass.scrapeAProduct('Patato', 3));
            expect = JSON.stringify(theClass.availableProducts.Food);
            assert.equal(actualProp, expectProp, 'Expecting number');
            assert.equal(actual, expect, 'Expecting object');
        });
        it('Check with existing product but bigger quant', () => {
            theClass = new Warehouse(30);
            theClass.addProduct('Food', 'Patato', 10);
            actual = JSON.stringify(theClass.scrapeAProduct('Patato', 30));
            expect = JSON.stringify(theClass.availableProducts.Food);
            assert.equal(actual, expect, 'Expecting reset product');
        });
    });

});


