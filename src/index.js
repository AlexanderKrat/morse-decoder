const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let resArr = [];
    let decodedStr = '';

    function leftPad(str) {
        if (str.length % 10 !== 0) {
            str = '0'.repeat(10 - str.length % 10) + str;
        }
        return str;
    }

    expr = leftPad(expr);

    for (var i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10));
    }



    function digitize(str) {
        str = str.replace( /\./g, '10' ).replace( /-/g, "11" );
        return str;
    }


    for (char in arr) {
        for (elem in MORSE_TABLE) {
            if (arr[char] === leftPad(digitize(elem))) {
                resArr.push(MORSE_TABLE[elem]);
            }
            else if (arr[char] === '**********') {
                resArr.push(' ');
            }

        }
    }
    decodedStr = resArr.join('');
    console.log(decodedStr);

    return decodedStr;
    
}
module.exports = {
    decode
}
