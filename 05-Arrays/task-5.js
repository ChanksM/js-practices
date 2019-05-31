function Reduce(arr, cb, acc) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter must be an Array');
    } else if (typeof cb != 'function') {
        throw new Error('second parameter must be a Function');
    } else if (typeof acc != 'string' && typeof acc != 'number') {
        throw new Error('third parameter must be number or string');
    }

    for (let i = 0; i < arr.length; i++) {
        if (cb(acc, arr[i], i, arr)) {
            acc = cb(acc, arr[i], i, arr);
        }
    }
    return acc;
}
const arr = [1,2,3];
const acc = 0;

const result = Reduce(arr, function(acc, item, i, arr) {
    return acc + item;
}, acc);

console.log(result);