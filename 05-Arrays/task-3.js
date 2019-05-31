function Every(arr, cb, acc) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter should be an Array');
    } else if (typeof cb != 'function') {
        throw new Error('second parameter should be a Function');
    }


    for ( let i = 0; i < arr.length; i++ ) {
        if (cb(arr[i], i, arr)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

let arr = [5, 2, 4, 1];

const result = Every(arr, function(item, i, arr) {
    return item % 2 === 0;
})

console.log(result);
