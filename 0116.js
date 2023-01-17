// 01
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(123), 1000);
//     setTimeout(() => reject(new Error("에러에러")), 1000);
// });

// promise.then(result => console.log(result), error => console.log(error));




// 02
// function delay(ms) {
//     // 여기에 코드 작성
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log('3초후 실행'));




// 03
let p = new Promise(resolved => {
    console.log('hello');
    resolved('Finished!')
})

p.then(r => {
    console.log(r);
})

// let promiseFunction = () => new Promise(resolved => {
//     console.log('hello promise function!');
//     resolved('Resolved!')
// });

async function promiseFunction() {
    console.log('hello promise function!');
    return 'Resolved!'
}

// promiseFunction().then(pf => {
//     console.log(pf);
// })








// async function promiseAsync() {
//     console.log('Hello!')
//     ///
//     ///
//     // promiseFunction().then(pf => {
//     //     console.log(pf);
//     // })
//     let pf = await promiseFunction();
//     console.log(pf)
//     return 'Async resolved!'
// }

function promiseFunc() {

    async function cb(res) {
        console.log('Hello!')
        ///
        ///
        let pf = await promiseFunction();
        console.log(pf);

        res('Async resolved!')
    }

    return new Promise(cb)
}


// promiseAsync().then(res => console.log(res));
promiseFunc().then(res => console.log(res));