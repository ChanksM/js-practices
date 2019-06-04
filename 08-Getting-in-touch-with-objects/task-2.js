const person = {};
Object.defineProperty(person, 'rate', {
    value: null,
    writable: true,
    configurable: false,
    enumerable: false,
});

person.rate = 30;

Object.defineProperty(person, 'salary', {
    get value () {
        const today = new Date();
        if (person.rate) {
        return today.getDate() * person.rate;
        } else {
            return 0;
        }
    },
    writable: false,
});

console.log(person.salary);