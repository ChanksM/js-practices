let login = 'Pitter';

let message = (login == 'Pitter') ? 'hi' :
    login == 'Owner' ? message = 'Hello' :
    login == '' ? message = 'unknown' :
    message = '';

console.log(message);