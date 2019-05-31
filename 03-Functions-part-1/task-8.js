function f(digits){

    if (digits.length === 0) {
        throw new Error ('parameter cant be an empty')
    } else if ( !Array.isArray(digits) ) {
        throw new Error('parameter type should be an array')
    }

    console.log(digits[0])
    digits.splice(0, 1);
    
    if (digits.length > 0) {
        return f(digits);
    } else {
        return false
    }
}

f([1,2,3]);
f(1,2,3);
f('Content');
f([]);