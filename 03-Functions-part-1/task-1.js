const f = function (num) {
    if (typeof num === 'number') {
        return num ** 3;
    } else {
        throw new Error ('parameter type is not a Number')
    }
}
console.log(f(2));
console.log(f('content'));
