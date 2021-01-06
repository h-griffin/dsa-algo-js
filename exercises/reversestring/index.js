// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// // ARR.REVERSE()
// function reverse(str) {

//     const arr = str.split('');  // split by char 
//     arr.reverse();              // flip arr elements
//     return arr.join('');        // join each element

//     // return str.split('').reverse.join('');
// }

// FOR OF
// function reverse(str) {
//     let reversed = '';                  // empty string
//     for (let character of str){         // each character of string
//         reversed = character + reversed;// add character to beginning of new reversed string
//     }
//     return reversed
// }

// REDUCE HELPER
function reverse(str) {
    // reduce runs 1 time for every element in arr
    // return str.split('').reduce((reversed, character) => {   // first arr func second init val
    //     return character + reversed;                         // return val is new init val for next char
    // }, '');                                                  // ,start initial value

    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
