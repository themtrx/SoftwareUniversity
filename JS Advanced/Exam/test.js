let Parser = require("./solution.js");
let assert = require("chai").assert;

// assert.equal(actual,expect, '');
// assert.deepEqual(actual, expect);

describe('Testing class', () => {

    let theClass;
    let actual;
    let expect;

    beforeEach(() => {
        theClass = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"},{"deleted" :"name"} ]');
        actual = null;
        expect = null;
    });

    describe('Constructor', () => {
        it('', () => {
            actual = theClass._data;
            expect = [ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"},{"deleted" :"name"} ];
            assert.deepEqual(actual,expect, '');

            actual = theClass._log;
            expect = [];
            assert.deepEqual(actual,expect, '');

            actual = theClass._addToLog
            assert.isFunction(actual, '');

            actual = theClass.data;
            expect = [{"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"}];
            assert.deepEqual(actual,expect, '');

            actual = theClass._log;
            expect = ["0: getData"];
            assert.deepEqual(actual,expect, '');
            
            actual = () => theClass.data
        });
    });

    describe('Method print()', () => {
        it('', ()=> {
            actual = theClass.print();
            expect = 'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR'
            assert.equal(actual,expect, '');

            actual = theClass._log;
            expect = ["0: print"];
            assert.deepEqual(actual,expect, '');
        });
    });
    describe('Method addEntries(entries)', () => {
        it('', ()=> {
            actual = theClass.addEntries("Steven:tech-support Edd:administrator");
            expect = 'Entries added!';
            assert.equal(actual, expect, '');

            actual = theClass._log;
            expect = ["0: addEntries"];
            assert.deepEqual(actual, expect, '');
        })

        it('', ()=> {
            
        })
    })
    describe('Method ', () => {
        it('', ()=> {

        })

        it('', ()=> {
            
        })
    })
    describe('Method ', () => {
        it('', ()=> {

        })

        it('', ()=> {
            
        })
    })
});