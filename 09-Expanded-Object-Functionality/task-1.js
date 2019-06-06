Object.prototype.extend = function(func) {
    for (let i of Object.keys(func)) {
        if (i === this[i]) {
            continue;
        } else if (typeof this[i] === 'undefined') {
            this[i] = i;
            Object.defineProperty(this, i, Object.getOwnPropertyDescriptor(func, i));
        }
    }
}

Object.defineProperty(Object.prototype, extend, {
    enumerable: false,
})

const data = { a: 'a', c: '1' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false