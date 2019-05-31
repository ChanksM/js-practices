let isEven = function (num) {
    if (typeof num !== "number"){
        throw new Error('parameter type is not a Number')
    }
    else if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));
