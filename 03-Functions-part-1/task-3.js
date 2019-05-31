const f = function(a, b, c) {

    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return ((a - b) / c);
    } else {
        throw new Error('all parameters type should be a Number');
    }
}

console.log(f(9,3,2));
console.log(f('s',9,3));
 