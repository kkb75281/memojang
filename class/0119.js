let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log('for');
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

console.log('for in');
for(let item of arr) {
    console.log(item);
}

console.log('map');
arr.map((e,i) => {
    console.log(i,e);
})

let data = [
    {index: 0, name: 'kwon', age: '10'},
    {index: 1, name: 'kyu', age: '24'},
    {index: 2, name: 'bibi', age: '38'},
    {index: 3, name: 'yuna', age: '26'},
    {index: 4, name: 'john', age: '58'},
]

console.log('map으로 짝수번째 data 뽑아내기');
data.map((e, i) => {
    if( i % 2 == 0 ) {
        console.log(e);
    }
})

let arr3 = [...arr, ...arr2];
console.log(arr3);