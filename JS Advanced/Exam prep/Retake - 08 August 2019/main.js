class Library {

    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length*2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {

        if(!this.subscriptionTypes.hasOwnProperty(type)){
            throw new TypeError(`The type ${type} is invalid`)
        }


        let subscriber = this.subscribers.find(s => s.name === name);

        if(!subscriber) {
            subscriber = {
                name,
                type,
                books: []
            }

            this.subscribers.push(subscriber);
        }else {
            subscriber.type = type;
        }


        return subscriber;
    }

    unsubscribe(name) {
        let isSubscribed = this.subscribers.find((x) => x.name === name);
        let subIndex = this.subscribers.indexOf(isSubscribed);
        if(!isSubscribed) {
            throw new TypeError(`There is no such subscriber as ${name}`)
        }

        this.subscribers.splice(subIndex,1);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let isSubscribed = this.subscribers.find((x) => x.name === subscriberName);

        if(!isSubscribed) {
            throw new TypeError(`There is no such subscriber as ${subscriberName}`)
        }

        if(isSubscribed.books.length< this.subscriptionTypes[isSubscribed.type]){
            let obj = {
                title: bookTitle,
                author: bookAuthor
            }
            isSubscribed.books.push(obj);

            return isSubscribed;

        }else {
            throw new TypeError(`You have reached your subscription limit ${this.subscriptionTypes[isSubscribed.type]}!`)
        }


    }

    showInfo (){
        if(this.subscribers.length===0){
            return `${this.libraryName} has no information about any subscribers`;
        }
 
        let result="";
       
        this.subscribers.forEach((e)=>{
            result+=`Subscriber: ${e.name}, Type: ${e.type}\n`;
            result+=`Received books: ${e.books.map(b =>
                `${b.title} by ${b.author}`)
            .join(", ")}`;
           
           result+='\n';
        });
 
        return result;
    }

}


let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());
