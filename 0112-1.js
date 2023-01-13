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

// promise().then((message) => {
//   console.log('This is in the then ' +  message)
// }, (error) => {
//   console.log('This is in the then ' +  error)
// })

const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000))
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(5), 5000))
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 3000))

promise1().then(result => {
    console.log(result)
    return promise2()
}).then(result => {
    console.log(result)
    return promise3()
}).then(result => {
    console.log(result)
})