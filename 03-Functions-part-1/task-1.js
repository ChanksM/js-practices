var f = function (num) {
    if (typeof num == 'number') {
        console.log(num ** 3);
    } else {
        throw new Error ('parameter type is not a Number')
    }
}
f(2);
f('content');