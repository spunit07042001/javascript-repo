class User {
    constructor(usename) {
        this.username = usename;
    }

    logME() {
        console.log(`Username : ${this.username}`);
    }

    static createID() {
        return `123`
    }
}

const punit = new User("punit")
// console.log(punit.createID());                  // error message

// the static keyword is used to define static methods or static properties in a class.
//  These are not tied to instances of the class but are instead associated with the class itself. 
//  Static members are typically used for utility or helper functions and properties that do not rely on the specific instance data.


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());                    // error message
iphone.logME();                                  

