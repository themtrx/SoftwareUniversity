const ChristmasMovies = require('./02. Christmas Movies_Resources');
const assert = require('chai').assert;

describe('Test class ChrismasMoveis', () => {

    let theClass;
    let actual;
    let expect;

    beforeEach(() => {
        theClass = new ChristmasMovies();
        actual = null;
        expect = null;
    });

    describe('Constructor', () => {
        it('', () => {

            actual = theClass.movieCollection;
            expect = [];
            assert.deepEqual(actual,expect, '');

            actual = theClass.watched;
            expect = {};
            assert.deepEqual(actual,expect,'');

            actual = theClass.actors;
            expect = [];
            assert.deepEqual(actual,expect,'');
        });
    });

    describe('Method buyMovie(movieName, actors)', () => {

        it('', () => {
            theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            actual = () => theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect = 'You already own Home Alone in your collection!'
            assert.throw(actual,expect, '')
        });

        it('', () => {
            actual = theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern', 'Daniel Stern']);
            expect = 'You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!';
            assert.equal(actual,expect, '');

            actual = theClass.movieCollection;
            expect = [{ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] }];
            assert.deepEqual(actual,expect);
        })
    })

    describe('Method discardMovie()', () => {

        it('', () => {
            actual = () => theClass.discardMovie('movieName');
            expect = 'movieName is not at your collection!';
            assert.throw(actual, expect, '');
        })

        it('', () => {
            theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            actual = () => theClass.discardMovie('Home Alone');
            expect = 'Home Alone is not watched!';
            assert.throw(actual,expect, '');
        });
        it('', () => {
            theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            theClass.watchMovie('Home Alone');
            actual = theClass.discardMovie('Home Alone');
            expect = 'You just threw away Home Alone!';
            assert.equal(actual,expect, '');

            actual = theClass.movieCollection;
            expect = [];
            assert.deepEqual(actual,expect,'');

            actual = theClass.watched;
            expect = {};
            assert.deepEqual(actual,expect, '');
        });
    })

    describe('Method watchMovie()', () => {

        it('', () => {
            actual = () => theClass.watchMovie('Home Alone');
            expect = 'No such movie in your collection!';
            assert.throw(actual,expect, '');
        });

        it('', () => {
            theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            theClass.watchMovie('Home Alone');
            actual = theClass.watched;
            expect = {'Home Alone': 1};
            assert.deepEqual(actual,expect, '');

            theClass.watchMovie('Home Alone');
            actual = theClass.watched;
            expect = {'Home Alone': 2};
            assert.deepEqual(actual,expect, '');
        })
    })

    describe('Method favouriteMovie()', () => {

        it('', () => {
            theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            actual = () => theClass.favouriteMovie();
            expect = 'You have not watched a movie yet this year!';
            assert.throw(actual,expect, '');
        });

        it('' , () => {
            theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            theClass.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            theClass.watchMovie('Home Alone');
            theClass.watchMovie('Home Alone 2');
            theClass.watchMovie('Home Alone');

            actual = theClass.favouriteMovie();
            expect = 'Your favourite movie is Home Alone and you have watched it 2 times!'
            assert.equal(actual,expect, '');
        })
    })

    describe('Method mostStarredActor()', () => {

        it('', () => {
            actual = () => theClass.mostStarredActor();
            expect = 'You have not watched a movie yet this year!';
            assert.throw(actual,expect, '');
        })
        it('', () => {
            theClass.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            theClass.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            actual = theClass.mostStarredActor();
            expect = 'The most starred actor is Macaulay Culkin and starred in 2 movies!';
            assert.equal(actual,expect, '');
        })
    })


});