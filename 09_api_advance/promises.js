// const promiseOne = new Promise(function(resolve, reject) {
//     // do an asyan task 
//     // DB call , cryptographic, netework
//     setTimeout(() => {
//         console.log("Async Task is completed");
//         resolve();
//     }, 1000);    
// })

// promiseOne.then(function() {
//     console.log("promise consumed");
// });


// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("async task 2 is completed");
//         resolve();
//     }, 2000);
// }).then(function() {
//     console.log("promise 2 consumed");
// })



// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve({username : "Chai", email : "punit@gmail.com"});
//     }, 1000);
// })
// promiseThree.then(function(user) {
//     console.log(user);
// });



// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Chai", password: "123" });
//         }
//         else {
//             reject("Error while fetching data");
//         }
//     }, 1000);
// })
// promiseFour.then(function (user) {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is completed");
// });



// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true; // Simulate error
//         if (!error) {
//             resolve({ username: "JavaScript", password: "123" });
//         } else {
//             reject("Error while JavaScript fetching data");
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// } 

// consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users/spunit07042001");
//         const data = await response.json();
//         // console.log(response);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch("https://api.github.com/users/spunit07042001")
.then((reponse)=>{
return reponse.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});