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
    function transformToMorse (str) {
        // debugger;
        let morseStr = '';
        for (let i = 0; i <= str.length-2; i = i+2) {
            let code = str[i]+str[i+1];
                if( code == '10') {
                  morseStr += '.';
                } else if( code == '11') {
                  morseStr += '-';
                }
            }
        return morseStr;    
    } 


    // seporate string to words inside string
    let str = expr.split('*'.repeat(10)); 
    let words = [];
    // debugger;
    for (let el of str) {
        let word = '';
        let letter = '';
        for (let i = 0; i < el.length; i++) {
            let symbol = el[i];
            letter += symbol;
            if (letter.length == 10) {
                letter = transformToMorse(letter);
                letter = MORSE_TABLE[letter];
                word += letter;
                letter = '';
                continue;
            }
        }
        words.push(word);
    }
 
    return words.join(' ');
}




module.exports = {
    decode
}


