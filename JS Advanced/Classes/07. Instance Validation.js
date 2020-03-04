class CheckingAccount  {

    constructor (clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(checkClientId) {
        const rgx = /^[0-9]{6}$/gi;
        
        if(typeof checkClientId !== 'string') {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        if(!rgx.test(checkClientId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = checkClientId;
    }

    get email(){
        return this._email
    }

    set email(checkEmail) {
        const rgx = /[A-Za-z0-9]+@[A-Za-z\.]+/g;
        const check = rgx.test(checkEmail);

        if(!check) {
            throw new TypeError('Invalid e-mail')
        }

        this._email = checkEmail; 
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(checkFName) {
        const rgx = /[A-Za-z]+/g;
        const check = rgx.test(checkFName);

        if(checkFName.length <3 || checkFName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if(!check) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this._checkFName = checkFName;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(checkLName) {
        const rgx = /[A-Za-z]+/g;
        const check = rgx.test(checkLName);
        if(checkLName.length <3 || checkLName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if(!check) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._checkLName = checkLName;

    }

}

let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov')
