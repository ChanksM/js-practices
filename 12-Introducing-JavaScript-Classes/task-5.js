class Validator {
    constructor() {}

    isEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    

    isDomain(domain) { 
        let re = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
        return domain.match(re) ? true: false;
    }

    isDate(date) {
        let separate = date.split('.')
        return (separate[0] > 0 && separate[0] < 32) && (separate[1] > 0 && separate[1] < 13) && (separate[2].length === 4);
    }

    isPhone(num) {
        let separate = num.split(' ')
        let first = separate[0]
        let code = separate[1]
        let number = separate[2]
        return (first[0] === '+') && (code[0] === '(' && code[code.length - 1] === ')')
        && (number.split('-').length !== 0)
    }
}
let validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92'));
