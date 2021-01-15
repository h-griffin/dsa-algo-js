// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// (for) from 0 to n                                    # 1
//     create an empty string 'stair'                   # 2
//     (for) from o0 to n                               # 3
//         if current column is less than or equal to n # 4
//             dd # to stair                            # 5
//         else                                         # 6
//             add space to stair                       # 7
//     console.log stair                                # 8


// BIG O - TIME COMPLEXITY
//      - N^2 quadratic 
//      nested loops

function steps(n) {
    for (let row = 0; row < n; row++){                  // # 1
        let stair = '';                                 // # 2
        for (let column = 0; column < n; column ++ ){   // # 3
            if (column <= row){                         // # 4
                stair += '#';                           // # 5
            }else{                                      // # 6
                stair += ' ';                           // # 7
            }
        }
        console.log(stair);                             // # 8
    }
}

// RECURSIVE

// RECURSION TIPS
//
// - figure out bare minimum pieces of information to represent problem   # 1
// - give reasonable defaults to the bare minimum pieces of information   # 2
// - check the base case. is there any work left to do? if not return     # 3
// - do some work, call your function again,                              # 4
//      making sure the arguments have changes in some fashion

function steps(n, row = 0, stair = '') {    // # 2
    if (n === row){                         // # 3
        return;
    }
    if(n === stair.length){                 // # 1
        console.log(stair);
        return steps(n, row+1);
    }
    if(stair.length <= row ){               // # 4
        stair += '#';
    }else {
        stair += ' ';
    }
    steps(n, row, stair)
}

function steps(n, row = 0, stair = '') {
    if (n === row){
        return;
    }
    if(n === stair.length){
        console.log(stair);
        return steps(n, row+1);
    }
    
    const add = stair.length <= row ? '#' : ' ';   // <<<<
    steps(n, row, stair+add );                     // <<<<
}

module.exports = steps;

