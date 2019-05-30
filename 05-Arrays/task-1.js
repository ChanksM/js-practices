function forEach (arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter must be Array');
    } else if (typeof cb != 'function') {
        throw new Error('Second parameters must be Function');
    }
    for(var i = 0; i < arr.length; i++) {
        var elem = arr[i];
  
        cb(elem, i, arr);
    }
}


const arr = [1,2,3];

console.log(forEach(arr, function(elem, i, arr) {
    console.log(elem, i, arr);
}));

