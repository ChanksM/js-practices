let arr = ['abcd', 'abcde', 'ab', 'abc'];

// START
let arrLength = [];
const myFunc = arr.map(function(n) {
    return arrLength.push(n.length);
});
// FINISH

console.log( arrLength ); // 4,5,2,3