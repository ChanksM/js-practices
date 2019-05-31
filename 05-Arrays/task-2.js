function Filter(arr, cb) {

    if (!Array.isArray(arr)) {
        throw new Error('First parameter must be an Array');
    } else if (typeof cb != 'function') {
        throw new Error('Second parameter must be a Function');
    }

    let result = []

    for(let i = 0; i < arr.length; i++) {
        if (cb (arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [1, 2, 3, -4, -5, 6]

const result = Filter(arr, function(item, i, arr){
    return item % 2 === 0;
})

console.log(result);
