let arr = ['abcd', 'abcde', 'ab', 'abc'];

// START
const myResult = arr.map(function(n) {
    return n.length;
});
// FINISH

console.log( myResult ); // 4,5,2,3