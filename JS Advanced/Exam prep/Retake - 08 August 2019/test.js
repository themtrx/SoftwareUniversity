const BookStore = require('./02. Book Store_Ресурси');
const assert = require('chai').assert;

describe("BookStore class", function() {

    let theClass;
    let actual;
    let expect;

    beforeEach(() => {
        theClass = new BookStore('');
        actual = null;
        expect = null;
    })


    describe("properties", function() {

        it("empty values", function() {
            actual = theClass.name;
            expect = '';

            let actualBooks = JSON.stringify(theClass.books);
            let expectBooks = JSON.stringify([]);

            let actualWorkers = JSON.stringify(theClass._workers);
            let expectWorkers = JSON.stringify([]);

            assert.equal(actual,expect, '');

            assert.equal(actualBooks,expectBooks, '');
            assert.equal(actualWorkers, expectWorkers, '');
        });

        it("not empty name", function() {
            theClass = new BookStore('str');
            actual = theClass.name;
            expect = 'str';
            assert.equal(actual,expect, '');
        });

     });

    describe('stockBooks()', () => {

         it('empty method', () => {
            actual = theClass.stockBooks(['Inferno-Dan Braun']);
            expect = [
                {
                    title: 'Inferno',
                    author: 'Dan Braun'
                }
            ];
            assert.deepEqual(actual, expect, 'empty arr');
         });
     });

    describe('hire()', () => {

        it('', ()=>{
            theClass.hire('George', 'seller');
            actual = () => theClass.hire('George', 'seller');
            expect = 'This person is our employee';
            assert.throw(actual, expect, '');
        })

        it('', () => {
            theClass = new BookStore('str');
            actual = theClass.hire('George', 'seller');
            expect = `George started work at str as seller`;
            assert.equal(actual, expect, '');

            let actualProp = theClass._workers;
            let expectProp = [{
                name: 'George',
                position: 'seller',
                booksSold: 0
            }];
            assert.deepEqual(actualProp,expectProp, '');
        });
    });

    describe('fire()', () => {

        it('', ()=> {
            theClass = new BookStore('str');
            actual = () => theClass.fire('George');
            expect = `George doesn't work here`;
            assert.throw(actual, expect, '');
        });
        it('', () => {
            theClass = new BookStore('str');
            theClass.hire('George','seller');
            theClass.hire('Ina', 'seller');

            actual = theClass.fire('George');
            expect = 'George is fired';
            assert.equal(actual, expect, '');

            let actualProp = theClass._workers;
            let expectProp = [{name: 'Ina', position: 'seller', booksSold: 0}];
            assert.deepEqual(actualProp, expectProp, '');
        });
    });
    describe('sellBook()', () => {

        it('out of stock book', () => {
            actual = () => theClass.sellBook('Book1', 'name1');
            expect = 'This book is out of stock';
            assert.throw(actual,expect,'');
        })
        it('no worker', () => {
            theClass.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            actual = () => theClass.sellBook('Harry Potter', 'name1');
            expect = 'name1 is not working here';
            assert.throw(actual,expect,'');
        });
        it('everything is OK', () => {
            theClass.hire('George', 'seller');
            theClass.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling']);
            theClass.sellBook('Harry Potter', 'George');

            actual = theClass._workers;
            expect = [{name: 'George', position: 'seller', booksSold: 1}]
            assert.deepEqual(actual,expect, '');

            let actualBooks = theClass.books;
            let expectBooks = [{ title: 'Inferno', author:'Dan Braun' }];
            assert.deepEqual(actualBooks,expectBooks, '');
        });
    });
    describe('printWorkers()', () => {

        it('' , () => {
            theClass.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);
            theClass.hire('George', 'seller');
            theClass.hire('Ina', 'seller');
            theClass.sellBook('Inferno', 'Ina');
            actual = theClass.printWorkers();
            expect = 'Name:George Position:seller BooksSold:0\nName:Ina Position:seller BooksSold:1';
            assert.equal(actual, expect, '');
        })
    })

});

