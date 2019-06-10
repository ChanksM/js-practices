class MyString {
    constructor(){}

    reverse(str){
        let stringRev ="";
        for(let i= 0; i<str.length; i++){
            stringRev = str[i]+stringRev;
        }
        return stringRev;
    }
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(sntnc) {
        let result = '';
        for (let i of sntnc.split(' ')) {
            result += this.ucFirst(i) + ' ';
        }
        return result;
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'
