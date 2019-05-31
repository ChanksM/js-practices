let login = 'Pitter';

let message = (login == 'Pitter') ? 'hi' :
    (login == 'Owner') ? 'Hello' :
    (login == '') ? 'unknown' :
    message = '';

console.log(message);