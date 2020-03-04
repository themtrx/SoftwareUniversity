const PizzUni = require('./02. PizzUni_Ресурси');
const assert = require('chai').assert;
const expectt = require('chai').expect;


describe("PizzaUni functionality", function() {

    let actual;
    let expect;
    let theClass;

    this.beforeEach(() => {

        actual = null;
        expect = null;
        theClass = new PizzUni()
    })

    describe("constructor()", function() {

        it("First property registeredUsers", function() {
            actual = theClass.registeredUsers;
            expect = [];
            assert.deepEqual(actual,expect,'Expecting empty array!')
        });
        it("Default object", function() {
            actual = theClass.availableProducts;
            expect = {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            };
            assert.deepEqual(actual,expect,'Expecting object with default props!')
        });
        it("First property registeredUsers", function() {
            actual = theClass.orders;
            expect = [];
            assert.deepEqual(actual,expect,'Expecting empty array!')
        });

     });

    describe("Method registerUser({email})", function() {
        it("Throw error if it is already email used", function() {
            theClass.registerUser('test@avb.bg');
            actual = () => theClass.registerUser('test@avb.bg');
            expect = 'This email address (test@avb.bg) is already being used!'
            assert.throw(actual, expect, 'Expecting error!');
        });
        it('Method is pushig the result in property', () => {
            theClass.registerUser('test@avb.bg');
            actual = JSON.stringify(theClass.registeredUsers);
            expect = JSON.stringify([{
                email: 'test@avb.bg',
                orderHistory: []
            }]);
            assert.equal(actual, expect, 'Property should be filled with the object');
        })
        it('Method is returning object', () => {
            ;
            actual = JSON.stringify(theClass.registerUser('test@avb.bg'));
            expect = JSON.stringify({
                email: 'test@avb.bg',
                orderHistory: []
            });
            assert.equal(actual, expect, 'Expecting object return');
        })
     });

    describe('Method makeAnOrder()', () => {

        it('Use the method with non registered email', () => {
        actual = () => theClass.makeAnOrder('test@abv.bg','pizza', 'drink');
        expect = 'You must be registered to make orders!';
        assert.throw(actual,expect, 'Expecting error');
        });

        it('Use the method with pizza that is NOT in the menu', () => {
            theClass.registerUser('test@abv.bg');
            actual = () => theClass.makeAnOrder('test@abv.bg','bulgarian pizza', 'drink');
            expect = 'You must order at least 1 Pizza to finish the order.';
            assert.throw(actual,expect, 'Expecting error');
        });

        it('Order something with drink that is not existing', () => {
            theClass.registerUser('test@abv.bg');
            theClass.makeAnOrder('test@abv.bg','Italian Style', 'drink');
            let actualHistory = JSON.stringify(theClass.registeredUsers)
            let expectHistory = JSON.stringify(
                [
                    {
                        email:'test@abv.bg',
                        orderHistory: [
                            {orderedPizza:'Italian Style'}
                        ]
                    }
                ]
            );
            let actualOrders = JSON.stringify(theClass.orders)
            let expectOrders = JSON.stringify(
                [
                    {  
                        orderedPizza:"Italian Style",
                        email:'test@abv.bg',
                        status:"pending"
                    }
                ]
            )
            actual = theClass.registeredUsers[0].orderedDrink;
            expect = undefined;
            assert.equal(actualHistory,expectHistory, 'Expecting array with object');
            assert.equal(actualOrders,expectOrders, 'Expecting array with object');
            assert.equal(actual,expect, 'Expecting undefined');
        });

        it('Full order', () => {
            theClass.registerUser('test@abv.bg');
            theClass.makeAnOrder('test@abv.bg','Italian Style', 'Water');
            let actualHistory = JSON.stringify(theClass.registeredUsers)
            let expectHistory = JSON.stringify(
                [
                    {
                        email:'test@abv.bg',
                        orderHistory: [
                            {
                                orderedPizza:'Italian Style',
                                orderedDrink:"Water"
                                
                            }
                        ]
                    }
                ]
            );
            let actualOrders = JSON.stringify(theClass.orders)
            let expectOrders = JSON.stringify(
                [
                    {  
                        orderedPizza:"Italian Style",
                        orderedDrink:"Water",
                        email:'test@abv.bg',
                        status:"pending"
                    }
                ]
            )
            assert.equal(actualHistory,expectHistory, 'Expecting array with object');
            assert.equal(actualOrders,expectOrders, 'Expecting array with object');
        });

        it('Full order method return', () => {
            theClass.registerUser('test@abv.bg');
            actual = theClass.makeAnOrder('test@abv.bg','Italian Style', 'Water');
            expect = 0
            assert.equal(actual,expect, 'Expecting index number');
        });

     })
    describe('Method completeOrder()', () => {

        it('Check the property when order is finished', () => {
            theClass.registerUser('test@abv.bg');
            theClass.makeAnOrder('test@abv.bg','Italian Style', 'Water');
            theClass.completeOrder()
            actual =  JSON.stringify(theClass.orders)
            expect = JSON.stringify(
                [
                    {  
                        orderedPizza:"Italian Style",
                        orderedDrink:"Water",
                        email:'test@abv.bg',
                        status:"completed"
                    }
                ]
            )
            assert.equal(actual,expect, 'Expecting object with changed status');
        });
        it('Check what method returns', () => {
        theClass.registerUser('test@abv.bg');
        theClass.makeAnOrder('test@abv.bg','Italian Style', 'Water');
        actual = JSON.stringify(theClass.completeOrder());
        expect = JSON.stringify({  
            orderedPizza:"Italian Style",
            orderedDrink:"Water",
            email:'test@abv.bg',
            status:"completed"
        })
        assert.equal(actual,expect, 'Expecting only object');
        });
        
     });
    describe('Method detailsAboutMyOrder(id)' ,() => {

        it('Check what method returns when status is pending', ()=> {
            theClass.registerUser('test@abv.bg');
            theClass.makeAnOrder('test@abv.bg','Italian Style', 'Water');
            actual = theClass.detailsAboutMyOrder(0);
            expect = 'Status of your order: pending';
            assert.equal(actual,expect, 'Expexting pending');
           
        })
        it('', () =>  {
            theClass.registerUser('test@abv.bg');
            theClass.makeAnOrder('test@abv.bg','Italian Style', 'Water')
            theClass.completeOrder();
            actual = theClass.detailsAboutMyOrder(0);
            expect = 'Status of your order: completed';
            assert.equal(actual,expect, 'Expexting completed');
        });
        it('Check what method returns when there are no orders', ()=> {
            actual = theClass.detailsAboutMyOrder(0);
            expect = undefined;
            assert.equal(actual,expect, 'Expexting undefined');
           
        })
    });
    describe('Method doesTheUserExist(email)', () => {
        it('' ,()=>{
            theClass.registerUser('test@abv.bg');
            actual = JSON.stringify(theClass.doesTheUserExist('test@abv.bg'));
            expect = JSON.stringify({email: "test@abv.bg", orderHistory: []})
            assert.equal(actual,expect, 'Expecting object')
        })
        it('' ,()=>{
            theClass.registerUser('test@abv.bg');
            actual = JSON.stringify(theClass.doesTheUserExist('tdsddest@abv.bg'));
            expect = undefined;
            assert.equal(actual,expect, 'Expecting object')
        })
    })
});




// describe("Test", function () {
//     let pizzUni;

//     beforeEach(function () {
//         pizzUni = new PizzUni();
//     });

//     describe('Test Constructor', () => {
//         it('Test properties', () => {
//             expect(pizzUni.registeredUsers).to.deep.equal([]);
//             expect(pizzUni.orders).to.deep.equal([]);
//             expect(pizzUni.availableProducts).to.deep.equal({
//                 pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
//                 drinks: ['Coca-Cola', 'Fanta', 'Water']
//             });
//         });
//     });

//     describe('Test registerUser()', () => {
//         it('Test error', () => {
//             pizzUni.registerUser("email1");
//             const result = () => pizzUni.registerUser("email1");

//             expect(result).to.throw(Error, `This email address (email1) is already being used!`);
//         });

//         it('Test add user correctly', () => {
//             const result = pizzUni.registerUser("email1");

//             expect(result).to.deep.equal({
//                 email: "email1",
//                 orderHistory: []
//             });

//             expect(pizzUni.registeredUsers[0]).to.deep.equal({
//                 email: "email1",
//                 orderHistory: []
//             });
//         });
//     });

//     describe('Test makeAnOrder()', () => {
//         it('Test invalid user error', () => {
//             const result = () => pizzUni.makeAnOrder("email1", "Barbeque Classic", "Fanta");

//             expect(result).to.throw(Error, 'You must be registered to make orders!');
//         });

//         it('Test invalid pizza error', () => {
//             pizzUni.registerUser("email1");
//             const result = () => pizzUni.makeAnOrder("email1", "Error", "Fanta");

//             expect(result).to.throw(Error, 'You must order at least 1 Pizza to finish the order.');
//         });

//         it('Test make an order with correct drink', () => {
//             pizzUni.registerUser("email1");
//             const result = pizzUni.makeAnOrder("email1", "Barbeque Classic", "Fanta");

//             expect(result).to.equal(0);
//             expect(pizzUni.orders[0]).to.deep.equal({
//                 email: "email1",
//                 orderedDrink: "Fanta",
//                 orderedPizza: "Barbeque Classic",
//                 status: "pending"
//             });
//             expect(pizzUni.orders[0].orderedDrink).to.equal("Fanta");
//             expect(pizzUni.registeredUsers[0].orderHistory).to.deep.equal([{
//                 orderedDrink: "Fanta",
//                 orderedPizza: "Barbeque Classic"
//             }]);
//         });

//         it('Test make an order with incorrect drink', () => {
//             pizzUni.registerUser("email1");
//             const result = pizzUni.makeAnOrder("email1", "Barbeque Classic", "Error");

//             expect(result).to.equal(0);
//             expect(pizzUni.orders[0]).to.deep.equal({
//                 email: "email1",
//                 orderedPizza: "Barbeque Classic",
//                 status: "pending"
//             });
//             expect(pizzUni.orders[0].orderedDrink).to.equal(undefined);
//             expect(pizzUni.registeredUsers[0].orderHistory).to.deep.equal([{
//                 orderedPizza: "Barbeque Classic"
//             }]);
//         });
//     });

//     describe('Test detailsAboutMyOrder()', () => {
//         it('Test pending functionality', () => {
//             pizzUni.registerUser("email1");
//             pizzUni.makeAnOrder("email1", "Barbeque Classic", "Fanta");

//             const result = pizzUni.detailsAboutMyOrder(0);

//             expect(result).to.equal('Status of your order: pending')
//         });

//         // it('Test completed functionality', () => {
//         //     pizzUni.registerUser("email1");
//         //     pizzUni.makeAnOrder("email1", "Barbeque Classic", "Fanta");
//         //     pizzUni.completeOrder();

//         //     const result = pizzUni.detailsAboutMyOrder(0);

//         //     expect(result).to.equal('Status of your order: completed')
//         // });

//         // it('Test completed functionality', () => {
//         //     const result = pizzUni.detailsAboutMyOrder(0);

//         //     expect(result).to.equal(undefined);
//         // });
//     });

//     describe('Test doesTheUserExist()', () => {
//         it('Test functionality with not existing user', () => {
//             const result = pizzUni.doesTheUserExist("email1");

//             expect(result).to.equal(undefined);
//         });

//         it('Test functionality with existing user', () => {
//             pizzUni.registerUser("email1")
//             const result = pizzUni.doesTheUserExist("email1");

//             expect(result).to.equal(pizzUni.registeredUsers[0]);
//         });
//     });

//     describe('Test completeOrder()', () => {
//         it('Test functionality', () => {
//             pizzUni.registerUser("email1");
//             pizzUni.makeAnOrder("email1", "Barbeque Classic", "Fanta");

//             const result = pizzUni.completeOrder();

//             expect(result).to.deep.equal({
//                 email: "email1",
//                 orderedDrink: "Fanta",
//                 orderedPizza: "Barbeque Classic",
//                 status: "completed"
//             });
//         });
//     });
// });