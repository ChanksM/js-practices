const getDivisors = function (num) {
    let divisors = [];
    if (typeof num !== 'number') {
        throw new Error ('parameter type is not a Number');
    } else if (num <= 0) {
        throw new Error ('parameter can\'t be a 0 or negative number')
    } else {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
    }
    return divisors;
}
console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));
