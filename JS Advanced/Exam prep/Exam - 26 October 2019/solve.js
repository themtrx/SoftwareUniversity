class Forum {

    _users = [];
    _questions = [];
    logged = []; 
    _id = 1;

    register(username, password, repeatPassword, email){
        
        if(!username || !password || !repeatPassword || !email) {
            throw new Error("Input can not be empty");
        }

        if(password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        let user = this._users.find((x) => x.username === username);
        let checkMail = this._users.find((x) => x.email === email);

        if(user || checkMail) {
            throw new Error("This user already exists!");
        }

        user = {
            username,
            password,
            email
        }

        this._users.push(user);

        return `${username} with ${email} was registered successfully!`
    }

    login(username, password) {
        const user = this._users.find(u => u.username === username);

        if (!user) {
            throw new Error("There is no such user");
        }

        if (user.password === password && !this.logged.includes(username)) {
            this.logged.push(username);
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {
        const user = this._users.find(u => u.username === username);

        if (!user) {
            throw new Error("There is no such user");
        }

        if (user.password === password && this.logged.includes(username)) {
            this.logged = this.logged.filter(name => name!== username);
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {
        let user = this._users.find((x) => x.username === username);
        let isLogged = this.logged.includes(username);

        if(!user || !isLogged) {
            throw new Error("You should be logged in to post questions");
        }

        if(question === "") {
            throw new Error("Invalid question");
        }

        let newQuestion = {
            id: this._id++,
            username,
            question,
            answers: []
        }

        this._questions.push(newQuestion);
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer){
        let user = this._users.find((x) => x.username === username);
        let isLogged = this.logged.includes(username);

        if(!user || !isLogged) {
            throw new Error("You should be logged in to post answers");
        }

        if(!answer) {
            throw new Error("Invalid answer");
        }

        let checkQuestion = this._questions.find(x=> x.id === Number(questionId));

        if(!checkQuestion) {
            throw new Error("There is no such question");
        }

        checkQuestion.answers.push({
            username,
            answer
        });
        return "Your answer has been posted successfully";
    }
    
    showQuestions() {
        let result = '';

        this._questions.forEach((x) => {
            result+= `Question ${x.id} by ${x.username}: ${x.question}\n`;
            x.answers.forEach((a) => {
                result+=`---${a.username}: ${a.answer}\n`
            });
        });
        return result.trim();
        
    }


}


let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");
console.log(forum.showQuestions());