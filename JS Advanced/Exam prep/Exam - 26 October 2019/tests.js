let SkiResort = require('./solution');
const assert = require('chai').assert;

describe("Tests …", function() {

    let theClass;
    let actual;
    let expect;

    beforeEach(() => {
        theClass = new SkiResort('str');
        actual = null;
        expect = null;
    })

    describe("Constructor()", function() {

        it("TODO …", function() {
            actual = theClass.name;
            expect = 'str';
            assert.equal(actual,expect, '');

            actual = theClass.voters
            expect = 0;
            assert.equal(actual,expect, '');

            actual = theClass.hotels;
            expect = [];
            assert.deepEqual(actual,expect, '');
        });
     });

     describe('Getter bestHotel()', () => {

        it('', ()=> {
            actual = theClass.bestHotel;
            expect = "No votes yet";
            assert.equal(actual,expect, '');
        });
        it('' ,() => {
            theClass.build("Sun", 10);
            theClass.build('Avenue',5);
            theClass.book('Sun', 5);
            theClass.book('Avenue', 5);
            theClass.leave('Sun', 3, 2);
            actual = theClass.bestHotel;
            expect = 'Best hotel is Sun with grade 6. Available beds: 8'
            assert.equal(actual,expect, '');
        });
     });

     describe('Method build()', () => {
        it('',() => {
            actual = () => theClass.build('', 3);
            expect = 'Invalid input';
            assert.throw(actual,expect, '');

            actual = () => theClass.build('Sun', 0);
            expect = 'Invalid input';
            assert.throw(actual,expect, '');
        });

        it('', () => {
            actual = theClass.build("Sun", 10);
            expect = 'Successfully built new hotel - Sun';
            assert.equal(actual,expect, ''); 
        });
     });
     describe('Method book()', () => {
         it('', () => {
            theClass.build("Sun", 10);
            actual = () => theClass.book('', 3);
            expect = 'Invalid input';
            assert.throw(actual,expect, '');

            actual = () => theClass.book('Sunnnn', 3);
            expect = 'There is no such hotel';
            assert.throw(actual,expect,'');

            actual = () => theClass.book('Sun', 11);
            expect = 'There is no free space';
            assert.throw(actual,expect,'');
         })
         it('', ()=> {
            theClass.build("Sun", 10);
            actual = theClass.book('Sun', 5);
            expect = 'Successfully booked';
            assert.equal(actual,expect, '');

            actual = theClass.hotels[0].beds;
            expect = 5;
            assert.equal(actual,expect, '');
         });
     });
     describe('Method leave()', () => {
         it('', () => {
            theClass.build("Sun", 10);
            theClass.book('Sun', 5);

            actual = () => theClass.leave('', 3,2);
            expect = 'Invalid input';
            assert.throw(actual,expect, '');

            actual = () => theClass.leave('Sunnnn', 3, 2);
            expect = 'There is no such hotel';
            assert.throw(actual,expect, '');
         });
         it('', () => {
            theClass.build("Sun", 10);
            theClass.book('Sun', 5);

            actual = theClass.leave('Sun', 3, 2);
            expect = '3 people left Sun hotel'
            assert.equal(actual,expect, '');

            actual = theClass.hotels[0].beds;
            expect = 8;
            assert.equal(actual,expect, '');
         })
     })
     describe('Method averageGrade()', () => {
         it('', () => {

            actual = theClass.averageGrade();
            expect = 'No votes yet';
            assert.equal(actual, expect, '');
         })

         it('', () => {

            theClass.build("Sun", 10);
            theClass.build('Avenue',5)
            theClass.book('Sun', 5)
            theClass.book('Avenue', 5)
            theClass.leave('Sun', 3, 2);
            theClass.leave('Avenue', 3, 3);
            theClass.book('Avenue', 3)
            theClass.leave('Avenue', 3, 0.5);

            actual = theClass.averageGrade();
            expect = 'Average grade: 1.83';
            assert.equal(actual,expect,'');

         })
     })

});




