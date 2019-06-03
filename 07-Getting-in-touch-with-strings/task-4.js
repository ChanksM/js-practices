function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error('parameter must be a string');
    }

    return +(source.slice(1));
}
console.log(extractCurrencyValue('$120')); //$120