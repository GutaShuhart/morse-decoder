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
    let codeArray = expr.match(/.{0,10}/g);
    codeArray = codeArray.filter(function(entry) { return entry.trim() != ''; });
    
   console.log(codeArray);
   let str ='';
    
    let morseArr = [];
    for( let i=0; i< codeArray.length; i++) {
      const searchRegExp = /10/g;
      const replaceWith = '.';
      const searchRegExp11 = /11/g;
      const replaceWith11 = '-';
      const searchRegExp0 = /0/g;
      const replaceWith0 = '';
      MORSE_TABLE['**********']=' ';
      const a = codeArray[i].replace(searchRegExp, replaceWith).replace(searchRegExp11, replaceWith11).replace(searchRegExp0, replaceWith0);

       str += MORSE_TABLE[a];
    }
   return str;
    
}

module.exports = {
    decode
}