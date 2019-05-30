var every = function(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should be an Array');
    }

    if (typeof cb != 'function') {
        throw new Error('second parameter should be a Function');
    }


    for (let i of arr) {
        if (cb(i)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

let arr = [2, 2, 4, 2];

let result = every(arr, function(item) {
    return item % 2 === 0;
})

console.log(result);
