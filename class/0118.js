// let userName = 'Kyubi';
// let password = 1234;
// let age = 26;

// let un = new Promise((s, j) => {
//     if(userName === 'Kyubi') {
//         s('userName checked !');
//     } else {
//         j('Umm.. Check userName again !');
//     }
// });

// let pw = new Promise((s, j) => {
//     if(password === 1234) {
//         s('Hi, Kyubi. Welcome back !');
//     } else {
//         j('Wrong password !');
//     }
//     console.log('awawawawa')
// });

// let ag = new Promise((s, j) => {
//     if(age > 20) {
//         s('adult member');
//     } else {
//         s('minor member');
//     }
// });

// un.then((checkUserNmae) => {
//     console.log(checkUserNmae);

//     return pw()
//     .then((checkPw) => {
//         console.log(checkPw);

//         return ag()
//         .then((checkAg) => {
//             console.log(checkAg)
//         })
//     }).catch((againPw) => {
//         console.log(againPw);
//     })
// }).catch((againUserName) => {
//     console.log(againUserName);
// });





// function startAsync(age) {
//   return new Promise((resolve, reject) => {
//     if (age > 20) { resolve(`${age} success`) }
//     else { reject(new Error(`${age} is not over 20`)) }
//   });
// }

// async function startAsync(age) {
//     if( age > 20 ) {
//         return `${age} success`;
//     } else {
//         return new Error(`${age} is not over 20`);
//     }
// }

// let promise1 = startAsync(25);
// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// let promise2 = startAsync(15);
// promise2
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });




// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function process() {
//     console.log('Hello!');
//     await sleep(1000);
//     console.log('Bye!');
// }

// process().then(() => {
//     console.log('-End-')
// })




function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});