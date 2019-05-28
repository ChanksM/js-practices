var f = function (num) {
    var check = [1, 2, 3, 4, 5, 6, 7];
    if (num in check && typeof num === 'number') {
        if (num === 1) {
            console.log('Monday');
        } else if (num === 2) {
            console.log('Tuesday')
        } else if (num === 3) {
            console.log('Wednesday')
        } else if (num === 4) {
            console.log('Thursday')
        } else if (num === 5) {
            console.log('Friday')
        } else if (num === 6) {
            console.log('Saturday')
        } else if (num === 7) {
            console.log('Sunday')
        }
    } else if (typeof num != 'number') {
        throw new Error('parameter type is not a Number')
    } else if (!(num in check)) {
        throw new Error('parameter should be in the range of 1 to 7')
    }
}
f(1);
f(2);
f(8);
f('1');