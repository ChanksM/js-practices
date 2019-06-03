function upperCaseFirst(string) {
    if (typeof string !== 'string') {
        throw new Error('parameter must be a string!');
    }
    let str = string.replace(string.charAt(0), string.charAt(0).toUpperCase());
    
    return str;
}
console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''