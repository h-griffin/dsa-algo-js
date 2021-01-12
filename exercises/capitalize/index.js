// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



// make an empty arry words                             # 1
// split the input string by space to get an array      # 2
// for each word in the array                           # 3
//     upprcase the first letter of the word            # 4
//     join the first letter withth erest of the word   # 5
//     push result into results array                   # 6
// join words into a string and return it               # 7

// BIG O 
//    O(N) single for loop
function capitalize(str) {
    let words = []                                          // # 1
    
    for(let word of str.split(' ')){                        // # 2  # 3
        words.push(word[0].toUpperCase() + word.slice(1));  // # 4  # 5  # 6
    }

    return words.join(' ');                                 // # 7
}



// create result string with capitilized char of input string   # 1
// for each char in string                                      # 2
//     if the char to the left is a space                       # 3
//         capitilize and add to result                         # 4
//     else                                                     # 5
//         add to result                                        # 6

// BIG O 
//    O(N) single for loop
function capitalize(str) {
    let result = str[0].toUpperCase();          // # 1

    for (let i = 0; i <str.length; i ++){       // # 2
        if(str[i - 1] === ' '){                 // # 3
            result += str[i].toUpperCase();     // # 4
        } else {                                // # 5
            result += str[i]                    // # 6
        }
    }
}

module.exports = capitalize;
