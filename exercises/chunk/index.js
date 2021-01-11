// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// create empty array to hold chunks called 'chunked'                           # 1
//
// FOR each element in 'unchunked' array                                        # 2
//     retrieve the last element in 'chunked'                                   # 3
//
//     IF last element does not exist, or if its length is equal to chunk size  # 4
//         push a new chunk into 'chunked' with the current element             # 5
//
//     ELSE add the current element into the chunk                              # 6
function chunk(array, size) {
    const chunked = [];                             // # 1

    for (let element of array){                     // # 2
        const last = chunked[chunked.length -1];    // # 3

        if (!last || last.length === size){         // # 4
            chunked.push([element])                 // # 5
        } else{
            last.push(element);                     // # 6
        }
    }

    return chunked;
}




// create an empty 'chunked' array                                  // # 1
// create 'index' start at 0                                        // # 2
// WHILE index is less than array.length                            // # 3
//     push a slice of length 'size' from 'array' into chunked      // # 4
//     add 'size' to 'index'                                        // # 5

// SLICE(start, up to not including)
function chunk(array, size) {
    const chunked = []                                  // # 1
    let index = 0;                                      // # 2

    while(index < array.length){                        // # 3
        chunked.push(array.slice(index, index + size)); // # 4
        index += size                                   // # 5
    }

    return chunked;
}


module.exports = chunk;
