// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// const chai = new User("chai", "chai@gmail.com", "123456");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scenes

function user (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const chai = new user("chai", "chai@gmail.com", "123456");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());