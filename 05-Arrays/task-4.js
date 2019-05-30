var some = function(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter must be an Array');
    }

    if (typeof cb != 'function') {
        throw new Error('second parameter must be a Function');
    }

    for (let i of arr) {
        if (cb(i)) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

var arr = [4, 1, 2, 2]

var result = some(arr, function(item) {
    return item > 5;
})

console.log(result);
