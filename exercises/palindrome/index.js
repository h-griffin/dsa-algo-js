// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// griffin try
function palindrome(str) {
    let pal = false;
    reversed = ''
    let string = str.split('');
    for (let char in string){
        reversed.concat(char);
    }
    // reversed.join('')
    if (reversed == str){
        pal = true;
    }

    return pal;
}




function palindrome(str) {
    const reversed = str.split('').reverse().join('')

    return str == reversed;
}

// EVERY FUNCTION
function palindrome(str) {
    return str.split('').every((char,i) => {
        return char === str[str.length - i -1 ]; // find matching position end of string
    })
}

module.exports = palindrome;
