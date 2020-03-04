
let PaymentPackage = require('./main');
let assert = require('chai').assert;

describe ('Checking PaymentPackage class functionality' , () => {

    let actual;
    let expect;
    let theClass;

    beforeEach(() => {
        actual = null;
        expect = null;
        theClass = new PaymentPackage('string', 20);
    });

    describe('error tests', () => {

        it('Invalid name check with different type', () => {
            actual = () => new PaymentPackage(false, 20);
            expect = 'Name must be a non-empty string';
            assert.throw(actual, expect, 'Error should be thrown');
        });

        it('Invalid name check with empty string', () => {
            actual = () => new PaymentPackage('', 20);
            expect = 'Name must be a non-empty string';
            assert.throw(actual, expect, 'Error should be thrown');
        });

        it('Value with negative number', () => {
            actual = () => new PaymentPackage('string', -20);
            expect = 'Value must be a non-negative number';
            assert.throw(actual, expect, 'Error should be thrown');
        });
        it('Value with different type', () => {
            actual = () => new PaymentPackage('string', false);
            expect = 'Value must be a non-negative number';
            assert.throw(actual, expect, 'Error should be thrown');
        });
        it('VAT with negative number', () => {
            actual = () => theClass.VAT = -20;
            expect = 'VAT must be a non-negative number';
            assert.throw(actual, expect, 'Error should be thrown');
        });
        it('active non boolean type', () => {
            actual = () => theClass.active = 'true';
            expect = 'Active status must be a boolean';
            assert.throw(actual, expect, 'Error should be thrown');
        });
    });

    describe('correct tests', () => {
        
        it('Correct properties', () => {
            theClass = new PaymentPackage('HR Services', 1500);
            actual = theClass.toString();
            expect = 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            assert.equal(actual, expect, 'Joined all proeprties');
        });

        it('Correct properties and inactive package', () => {
            theClass = new PaymentPackage('HR Services', 1500);
            theClass.active = false;
            actual = theClass.toString();
            expect = 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            assert.equal(actual, expect, 'Joined all proeprties');
        });

        it('Value zero', () => {
            theClass = new PaymentPackage('HR Services', 0);
            theClass.active = false;
            actual = theClass.toString();
            expect = 'Package: HR Services (inactive)\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0';
            assert.equal(actual, expect, 'Joined all proeprties');
        });

        it('Correct private property VAT', ()=> {
            theClass.VAT = 30;
            actual = theClass._VAT;
            expect = 30;
            assert.equal(actual,expect, 'Expecting number')
        })

        it('Correct properties', () => {
            theClass = new PaymentPackage('HR Services', 1500);
            let actualName = theClass._name;
            let actualValue = theClass._value;
            let actualVAT = theClass._VAT;
            let actualActive = theClass._active;
            let expectName = 'HR Services'
            let expectValue = 1500;
            let expectVAT = 20;
            let expectActive = true;
            assert.equal(actualName, expectName, 'Joined all proeprties');
            assert.equal(actualValue, expectValue, 'Joined all proeprties');
            assert.equal(actualVAT, expectVAT, 'Joined all proeprties');
            assert.equal(actualActive, expectActive, 'Joined all proeprties');
        });

    });

});

// class PaymentPackage {
//     constructor(name, value) {
//       this.name = name;
//       this.value = value;
//       this.VAT = 20;      // Default value    
//       this.active = true; // Default value
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(newValue) {
//       if (typeof newValue !== 'string') {
//         throw new Error('Name must be a non-empty string');
//       }
//       if (newValue.length === 0) {
//         throw new Error('Name must be a non-empty string');
//       }
//       this._name = newValue;
//     }
  
//     get value() {
//       return this._value;
//     }
  
//     set value(newValue) {
//       if (typeof newValue !== 'number') {
//         throw new Error('Value must be a non-negative number');
//       }
//       if (newValue < 0) {
//         throw new Error('Value must be a non-negative number');
//       }
//       this._value = newValue;
//     }
  
//     get VAT() {
//       return this._VAT;
//     }
  
//     set VAT(newValue) {
//       if (typeof newValue !== 'number') {
//         throw new Error('VAT must be a non-negative number');
//       }
//       if (newValue < 0) {
//         throw new Error('VAT must be a non-negative number');
//       }
//       this._VAT = newValue;
//     }
  
//     get active() {
//       return this._active;
//     }
  
//     set active(newValue) {
//       if (typeof newValue !== 'boolean') {
//         throw new Error('Active status must be a boolean');
//       }
//       this._active = newValue;
//     }
  
//     toString() {
//       const output = [
//         `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
//         `- Value (excl. VAT): ${this.value}`,
//         `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
//       ];
//       return output.join('\n');
//     }
//   }
// module.exports = PaymentPackage;