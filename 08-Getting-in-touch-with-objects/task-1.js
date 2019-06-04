const person = {};

Object.defineProperty(person, 'salary', {
    get() {
        const now = new Date();
        const date = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

        if ( date - now.getDate() > 20) {
            return 'Good salary';
        } else {
            return 'Bad salary';
        }
    },
});

console.log(person.salary);