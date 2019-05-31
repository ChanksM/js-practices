function Some(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter must be an Array');
    } else if (typeof cb != 'function') {
        throw new Error('second parameter must be a Function');
    }

    for (let i = 0; i < arr.length; i++) {
        if (!(cb(arr[i], i, arr))) {
            continue;
        } else {
            return true;
        }
    }
    return false;
}

let arr = [2, 1, 8, 2]

const result = Some(arr, function(item, i, arr) {
    return item > 5;
})

console.log(result);
