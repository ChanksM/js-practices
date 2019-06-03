function truncate(string, maxlength) {
    if (typeof string !== 'string' && typeof maxlength !== 'number') {
        throw new Error('first parameter must be a string and second must be a number');
    } else if (string.length > maxlength) {
        return string.slice(0, maxlength - 3) + '...';
    } else {
        return string
    }
}
console.log(truncate('I wanna to say next thing about this topic', 22)); // 'I wanna to say next...'
