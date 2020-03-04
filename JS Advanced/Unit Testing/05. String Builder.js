let StringBuilder = require('./main');
let assert = require('chai').assert;


describe('StringBuilder class testing', () => {
    
    let actualRes;
    let expectRes;

    beforeEach(()=>{
        actualRes = null;
        expectRes = null;
        sbClass = new StringBuilder();
    })

    describe('Checking properties', () => {
        
        it('With nothing', () => {
            actualRes = new StringBuilder();
            expectRes = [];
            assert.deepEqual(actualRes._stringArray, expectRes, 'Class property should be parsed to array!')
        });
        it('With correct property', () => {
            actualRes = new StringBuilder('string');
            expectRes = Array.from('string');
            assert.deepEqual(actualRes._stringArray, expectRes, 'The sting should be splited in array')
        });
        it('Different type', () => {
            actualRes = () => new StringBuilder(34); // If we expect error, we should save the result in function
            expectRes = 'Argument must be string';
            assert.throw(actualRes, expectRes, 'Incorrect type passed'); //Expecting throw Error sintax
        });
    });
    
    describe('Method append(string)', ()=> {

        it('with correct string', () => {
            sbClass.append('string');
            actualRes = sbClass._stringArray;
            expectRes = Array.from('string');
            assert.deepEqual(actualRes, expectRes, 'Expected array')
        })
        it('Already have prop string', () => {
            sbClass = new StringBuilder('string')
            sbClass.append('extend');
            actualRes = sbClass._stringArray;
            expectRes = Array.from('stringextend');
            assert.deepEqual(actualRes, expectRes, 'Expected extended array')
        })
        it('Different type', () => {
            actualRes =  () => sbClass.append(true);
            expectRes = 'Argument must be string';
            assert.throw(actualRes, expectRes, 'Incorrect type passed');
        });
    })

    describe('Method prepend(string)', ()=> {

        it('with correct string', () => {
            sbClass.prepend('string');
            actualRes = sbClass._stringArray;
            expectRes = Array.from('string');
            assert.deepEqual(actualRes, expectRes, 'Expected array')
        })
        it('Already have prop string', () => {
            sbClass = new StringBuilder('string')
            sbClass.prepend('extend');
            actualRes = sbClass._stringArray;
            expectRes = Array.from('extendstring');
            assert.deepEqual(actualRes, expectRes, 'Expected extended array')
        })
        it('Different type', () => {
            actualRes =  () => sbClass.prepend(true);
            expectRes = 'Argument must be string';
            assert.throw(actualRes, expectRes, 'Incorrect type passed');
        });
    });
    
    describe('Method insertAt(string, index)', () => {

        it('adds string into index' , ()=> {
            sbClass = new StringBuilder('string')
            sbClass.insertAt('new', 1);
            actualRes = sbClass._stringArray;
            expectRes = ['s','n','e','w','t','r','i','n','g'];
            assert.deepEqual(actualRes, expectRes, 'The string should be passend in given index')
        });

        it('Different type', () => {
            actualRes =  () => sbClass.insertAt(true);
            expectRes = 'Argument must be string';
            assert.throw(actualRes, expectRes, 'Incorrect type passed');
        });
    });

    describe('Method remove(startIndex, length) ', () => {

        it('removes elements from storage array' ,()=> {
            sbClass = new StringBuilder('string');
            sbClass.remove(1,3);
            actualRes = sbClass._stringArray;
            expectRes = Array.from('sng');
            assert.deepEqual(actualRes,expectRes,'expectign cutted array');
        });
    });

    describe('Method toString()', () => {
        it('convert array to string', () =>  {
            sbClass = new StringBuilder('string');
            actualRes = sbClass.toString();
            expectRes = 'string';
            assert.equal(actualRes,expectRes, 'Expecting string from array');
        })
    })

    describe('Check static method', () => {
        it('give me error', ()=> {
            actualRes = () => StringBuilder._vrfyParam(true);
            expectRes = 'Argument must be string';
            assert.throw(actualRes, expectRes, 'Incorrect type passed');
        })
    })

});


// ------------------------------------ TESTING CLASS ------------------------------------

// class StringBuilder {
//     constructor(string) {
//       if (string !== undefined) {
//         StringBuilder._vrfyParam(string);
//         this._stringArray = Array.from(string);
//       } else {
//         this._stringArray = [];
//       }
//     }
  
//     append(string) {
//       StringBuilder._vrfyParam(string);
//       for(let i = 0; i < string.length; i++) {
//         this._stringArray.push(string[i]);
//       }
//     }
  
//     prepend(string) {
//       StringBuilder._vrfyParam(string);
//       for(let i = string.length - 1; i >= 0; i--) {
//         this._stringArray.unshift(string[i]);
//       }
//     }
  
//     insertAt(string, startIndex) {
//       StringBuilder._vrfyParam(string);
//       this._stringArray.splice(startIndex, 0, ...string);
//     }
  
//     remove(startIndex, length) {
//       this._stringArray.splice(startIndex, length);
//     }
  
//     static _vrfyParam(param) {
//       if (typeof param !== 'string') throw new TypeError('Argument must be string');
//     }
  
//     toString() {
//       return this._stringArray.join('');
//     }
//   }
// module.exports = StringBuilder;

