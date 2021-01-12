// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. 
//
// Only consider characters, not spaces
// or punctuation.  
// 
// Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// BIG O : 
//     O(n+m) two seperate single for loops

// CHAR MAP
function anagrams(stringA, stringB) {
    const aCharMap = build_char_map(stringA);
    const bCharMap = build_char_map(stringB);

    // check key length / extra characters
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    } 

    // check key exists in other obj
    for (let char in aCharMap){
        if (aCharMap[char] !== bCharMap[char]){
            return false
        }
    }

    return true
}

function build_char_map(str){
    const charMap ={}
    
    // strip punctuation and spaces
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] +1 || 1;
    }

    return charMap;
}


function anagrams(stringA, stringB) {
    return clean_string(stringA) === clean_string(stringB);
}

function clean_string(str){
    return str.replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = anagrams;
