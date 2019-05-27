var login = 'Pitter';

var message = login == 'Pitter' ? message = 'hi' :
    login == 'Owner' ? message = 'Hello' :
    login == '' ? message = 'unknown' :
    message = '';

console.log(message);