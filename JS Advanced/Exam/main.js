class Article {

    constructor (title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes(){
        if(this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if(this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length-1} others like this article!`;
    }

    like(username) {

        let user = this._likes.includes(username);

        if(user) {
            throw new Error('You can\'t like the same article twice!');
        }

        if(this.creator === username) {
            throw new Error('You can\'t like your own articles!');
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {

        let user = this._likes.indexOf(username);

        if(user === -1) {
            throw new Error('You can\'t dislike this article!');
        }

        this._likes.splice(user, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        // {Id, Username, Content, Replies}

        let currentComment = this._comments.find((x) => x.Id === id);

        if(!currentComment) {

            let comment = {
                Id: this._comments.length +1,
                Username: username,
                Content: content,
                Replies: []
            }

            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }
        // {Id, Username, Content}

        let reply = {
            Id: `${currentComment.Id}.${currentComment.Replies.length +1}`,
            Username: username,
            Content: content
        }

        currentComment.Replies.push(reply);

        return 'You replied successfully';
    }

    toString(sortingType){

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        if(sortingType === 'asc') {

            this._comments.sort((a,b) => a.Id - b.Id ).forEach((x) => {
                result+= `-- ${x.Id}. ${x.Username}: ${x.Content}\n`

                x.Replies.sort((a,b) => Number(a.Id) - Number(b.Id)).forEach((y) => {
                    result+= `--- ${y.Id}. ${y.Username}: ${y.Content}\n`
                });
            });
            
        }else if (sortingType === 'desc') {
            this._comments.sort((a,b) => b.Id - a.Id ).forEach((x) => {
                result+= `-- ${x.Id}. ${x.Username}: ${x.Content}\n`

                x.Replies.sort((a,b) => Number(b.Id) - Number(a.Id)).forEach((y) => {
                    result+= `--- ${y.Id}. ${y.Username}: ${y.Content}\n`
                });
            });
        }else if (sortingType === 'username'){
            this._comments.sort((a,b) => (a.Username).localeCompare(b.Username)).forEach((x) => {
                result+= `-- ${x.Id}. ${x.Username}: ${x.Content}\n`

                x.Replies.sort((a,b) => (a.Username).localeCompare(b.Username)).forEach((y) => {
                    result+= `--- ${y.Id}. ${y.Username}: ${y.Content}\n`
                });
            });
        }

        return result.trim();
    }

}



let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));

// console.log(art.toString('asc'));

// console.log()
console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));