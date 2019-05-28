var digits = [1, 3, 5, 8]

function f(digits){
    var sum = 0

    if (digits.length === 0) {
        throw new Error ('parameter cant be an empty')
    }

	for (var i = 0; i < digits.length; i++) {
        if (!isNaN(digits[i])) {
            sum += digits[i];
        } else {
            throw new Error ('parameter type should be an array'); 
        }
    }
	return sum
}

console.log(f(digits))
