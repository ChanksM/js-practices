function checkSpam(source, example) {
    if (typeof source !== 'string' && typeof example !== 'string') {
        throw new Error('both of parameters must be a string');
    }
    else if (source.toLowerCase().includes(example.toLowerCase())) {
        return true;
    } else {
        return false
    }
}
console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true
