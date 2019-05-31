const f = function (num) {
    let check = [1, 2, 3, 4, 5, 6, 7];
    if (num in check && typeof num === 'number') {
        if (num === 1) {
            return 'Monday';
        } else if (num === 2) {
            return 'Tuesday';
        } else if (num === 3) {
            return 'Wednesday';
        } else if (num === 4) {
            return 'Thursday';
        } else if (num === 5) {
            return 'Friday';
        } else if (num === 6) {
            return 'Saturday';
        } else if (num === 7) {
            return 'Sunday'
        }
    } else if (typeof num != 'number') {
        throw new Error('parameter type is not a Number')
    } else if (!(num in check)) {
        throw new Error('parameter should be in the range of 1 to 7')
    }
}
console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));
