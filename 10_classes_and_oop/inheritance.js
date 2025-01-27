class User {
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCource(){
        console.log(`${this.username} is adding a course`);
    }
}

const chai = new Teacher("punit", "punit@gmail.com", "punit123");
console.log(chai);
chai.addCource(); 