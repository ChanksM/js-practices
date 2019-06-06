Object.prototype.mergeDeepRight = function(attrs) {
    for (let i of Object.keys(attrs)){
        if ( (typeof this[i] === 'object') && (typeof attrs[i] === 'object') ){
            this[i] = this[i].mergeDeepRight(attrs[i]);
        } else if (Array.isArray(this[i]) && Array.isArray[attrs[i]]) {
            this[i] = attrs[i].toString()
        } else {
            this[i] = attrs[i];
        }
    }
    return this;
}

Object.defineProperty(Object.prototype, mergeDeepRight, {
    enumerable: false,
})

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});

console.log(data);
