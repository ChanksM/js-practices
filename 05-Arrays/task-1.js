function forEach (arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter must be Array');
    } else if (typeof cb != 'function') {
        throw new Error('Second parameters must be Function');
    }
    for ( let i = 0; i < arr.length; i++ ) {
        cb(arr[i], i, arr);
    }
}

const arr = [1,2,3];

forEach(arr, function(item, i, arr) {
    console.log(`element ${item} \nindex ${i} \narrays is ${arr}`);
});
