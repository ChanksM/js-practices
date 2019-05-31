function Reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameters must be an array');
    } else if ( arr.length === 0 ) {
        throw new Error('Array mustn\'t be empty');
    }

    let newArr = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const arr = [3,2,1];
console.log(Reverse(arr)); // [1,2,3]