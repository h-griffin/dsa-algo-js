// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // check both but dont count upper and lower for same char
    upper_vowels = ['A','E','I','O','U']
    lower_vowels = ['a','e','i','o','u',]
    counter = 0;
    let string = str.split('');
    for (let char in string){
        if (char in upper_vowels){
            counter += 1;
        } else if (char in lower_vowels){
            counter += 1;
        }
    }
        
    return counter;
}

module.exports = vowels;
