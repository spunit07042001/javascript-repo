// const user = {
//     username: 'batman',
//     logincount: 8,
//     signIN: true,

//     getUserDetails : function(){
//         // console.log(`Username is ${this.username}, login count is ${this.logincount}, signIN status is ${this.signIN}`);
//         // console.log(`User is ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user['username']);
// // Removed the incorrect console.log statement
// console.log(user['getUserDetails()']);
// user.getUserDetails();


const promise = new Promise((resolve, reject) => {});
const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);