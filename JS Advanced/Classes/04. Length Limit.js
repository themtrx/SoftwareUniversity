class Stringer {

    intString;
    innerLength;

    constructor(name, length) {
        this.innerString  = name;
        this.innerLength = length;
    }

    increase(len){
        this.innerLength += len;
    }

    decrease(len) {
        this.innerLength = this.innerLength -len >0? this.innerLength - len: 0;
    }

    toString() {

        if(this.innerLength === 0) {
            return '...';
        }else if(this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...';
        }else if (this.innerString.length<= this.innerLength) {
            return this.innerString;
        }
    }   
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

