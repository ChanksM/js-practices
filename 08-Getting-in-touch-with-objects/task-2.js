const person = {};
Object.defineProperty(person, 'rate', {
    value: null,
    writable: true,
    configurable: false,
    enumerable: false,
});

person.rate = 30;

Object.defineProperty(person, 'salary', {
    get() {
        const today = new Date();
        if (person.rate) {
            return today.getDate() * person.rate;
        } else {
            return 0;
        }
    },
    set(value) {
        throw new Error('salary can\'t be changed');
    },
});
person.salary = 30;
console.log(person.salary);