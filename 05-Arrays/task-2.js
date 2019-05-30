var filter = function(arr, cb) {

    if (!Array.isArray(arr)) {
        throw new Error('First parameter must be an Array');
    }

    if (typeof cb != 'function') {
        throw new Error('Second parameter must be a Function');
    }

    let result = []

    for(let i = 0; i < arr.length; i++) {
        if (cb (arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result;
}

let arr = [1, 2, 3, -4, -5, 6]

let result = filter(arr,function(item){
    return item % 2 === 0;
})

console.log(result);
