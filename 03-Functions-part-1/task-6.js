var isEven = function (num) {
    if (typeof num !== "number"){
        throw new Error('parameter type is not a Number')
    }
    else if (num % 2 ===0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isEven(3);
isEven(4);
isEven('Content');