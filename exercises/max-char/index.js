// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}

    let max = 0;
    let macChar = '';

    // of = itterable strings/arrays
    for (let char of str){
        if (!charMap[char] ){     // not seen yet
            charMap[char] = 1;
        }else{
            charMap[char]++;      // seen
        }
    }

    // in = object
    for (let char in charMap){
        if(charMap[char] > max){    // check current against max
            max = charMap[char];    // reset max counter
            maxChar = char;         // reset new max char
        }
    }

    return maxChar;
    
}

// function maxChar(str) {
//     const chars = {}

//     for (let char of string){
//         chars[char] = chars[char] + 1 || 1; // add 1 OR|| if null/false, set to 1
//     }
// }


module.exports = maxChar;

//     "Hello there!"
//     {
//         'H':1,
//         'e':3,
//         'l':2,
//         '0':1,
//         ' ':1,
//         't':1,
//         'h':1,
//         'r':1,
//         '!':1
//     }
// 
//     > 'e'