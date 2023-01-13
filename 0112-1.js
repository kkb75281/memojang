// new Promise(function(res){
//     setTimeout(function() {
//       res("after 3seconds");
//     }, 3000);
// }).then(() => {
//     new Promise(function(res){
//         setTimeout(function() {
//           res(console.log("after 1seconds"));
//         }, 5000);
//     })
// }).then(() => {
//     new Promise(function(res){
//         setTimeout(function() {
//           res(console.log("after 5seconds"));
//         }, 1000);
//     })
// });

// let test1 = function (a) {
//   return new Promise(function(answer1, answer2) {
//     setTimeout(function() {
//       if(a) {
//         answer1("It is true!!!");
//       } else {
//         answer2("It is false!!!");
//       }
//     }, 2000);
//   });
// }

// test1(0).then(function(success) {
//   console.log(success);
// }, function(fail) {
//   console.log(fail);
// })

// let promise = () => new Promise((resolve, reject) => {
//   let a = 1 + 1;

//   if(a == 2) {
//       resolve('success');
//   } else {
//       reject('failed');
//   }
// })





// let promise = (v1 = 1, v2 = 1) => {

//     let promiseArg = (then, err) => {
//         let a = v1 + v2;

//         if (a == 2) {
//             then('success');
//         } else {
//             // then('failed');
//             err('failed');
//         }
//     }

//     let p = new Promise(promiseArg)

//     return p;
// }

// let promise = (v1 = 1, v2 = 1) => new Promise((then, err) => {
//     let a = v1 + v2;

//     if (a == 2) {
//         then('success');
//     } else {
//         // then('failed');
//         err('failed');
//     }
// })


// promise(23).then((message) => {
//     console.log('This is in the then ' + message)
// }, err => {
//     console.log('-catch-');
//     console.log('This is in the then ' + err)
// });

let v1 = 1;
let v2 = 10;

let promise = new Promise((then, err) => {
    let a = v1 + v2;

    if (a == 2) {
        then('success');
    } else {
        // then('failed');
        err('failed');
    }
})

promise.then((message) => {
    console.log('This is in the then ' + message)
}, err => {
    console.log('-catch-');
    console.log('This is in the then ' + err)
});


// promise().then((message) => {
//     console.log('This is in the then ' + message)
// }).catch(err=>{
//     console.log('-catch-', err);
//     console.log('This is in the then ' + err)
// });

// const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000))
// const promise2 = () => new Promise(resolve => setTimeout(() => resolve(5), 5000))
// const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 3000))


// let fun = () => 1234;
// let fun = ()=>{
//     return 1234;
// }
// let fun = function (){
//     return 1234
// }

// function fun(){
//     return 1234;
// }


// promise1().then(result => {
//     console.log(result)
//     return promise2()
// }).then(result => {
//     console.log(result)
//     return promise3()
// }).then(result => {
//     console.log(result)
// })

// function fetchUser() {
//     var url = 'https://jsonplaceholder.typicode.com/users/1'
//     return fetch(url).then(function (response) {
//         return response.json();
//     });
// }

// function fetchTodo() {
//     var url = 'https://jsonplaceholder.typicode.com/todos/1';
//     return fetch(url).then(function (response) {
//         return response.json();
//     });
// }

// async function logTodoTitle() {
//     var user = await fetchUser();
//     if (user.id === 1) {
//         var todo = await fetchTodo();
//         console.log(todo.title); // delectus aut autem
//     }
// }
