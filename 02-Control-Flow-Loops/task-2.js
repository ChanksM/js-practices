let login = 'Roman';

let message = (login == 'Pitter') ? 'hi' :
    (login == 'Owner') ? 'Hello' :
    (login == '') ? 'unknown' :
    '';

console.log(message);