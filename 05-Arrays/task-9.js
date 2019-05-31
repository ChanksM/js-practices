function ArrayFill (v, l) {
    if (!Array.isArray(v) && typeof v !== 'number' && typeof v !== 'string') {
        throw new Error('first parameter must be a number, string, object array');
    } else if (typeof l !== 'number') {
        throw new Error('second parameter must be a number')
    }

    let newArr = []
    for (let i = 0; i < l; i++) {
        newArr.push(v);
    }
    return newArr;
}

let result = ArrayFill('x', 5);
console.log(result);
