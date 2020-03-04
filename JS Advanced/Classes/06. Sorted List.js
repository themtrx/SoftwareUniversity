class List {

    arr = [];
    size = 0;

    add(num){
        this.arr.push(num);
        this.arr.sort((a,b) => a-b);
        this.size = this.arr.length;
    }

    remove(index) {

        if(index>=0 && index<= this.arr.length){
            this.arr.splice(index,1);
            this.arr.sort((a,b) => a-b);
            this.size = this.arr.length !== undefined? this.arr.length: 0;
        }else {
            console.error(`Given index is outside the list length`);
        }

    }

    get(index) {

        if(index>=0 && index<= this.arr.length) {
            return this.arr[index];
        }
        return 0;
    }

}

let myList = new List();

for (let i = 0; i < 10; i++) {
    myList.add(i);
}

myList.remove(9);
// var expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < expectedArray.length; i++) {
//     console.log(myList.get(i));
// }
myList.remove(5);
// expectedArray = [0, 1, 2, 3, 4, 6, 7, 8];
// for (let i = 0; i < expectedArray.length; i++) {
//     console.log(myList.get(i));
// }
myList.remove(0);
expectedArray = [1, 2, 3, 4, 6, 7, 8];
for (let i = 0; i < expectedArray.length; i++) {
    console.log(myList.get(i));
}