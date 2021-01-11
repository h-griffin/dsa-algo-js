

- [The Coding Interview Bootcamp: Algorithms + Data Structures by Stephen Grinder](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)
- [Stephen Grinder AlgoCasts Github link](https://github.com/StephenGrider/AlgoCasts)


### $ jest folder/test.js --watch

## Table of Contents
- [01 - reverse string](exercises/reverse-string)
    - split('') join('') by char, reverse by adding char to end of new string
    - **use for reversing chars - strings - nums**

- [02 - palindrome](exercises/palindrome)
    - split('') join('') check each() char against end str.len() -i -1 

- [03 - reverse integer](exercises/reverse-int)
    - multiply negatives by -1 or *Math.sign(n) to preserve symbol

- [04 - max character](exercises/max-char)
    - key val pairs for each char, create key of not seen, add if seen 
    - max counter and maxChar holder to reset and check against
    - **use for counting - most common character - anagrams**
 
- [05 - fizzbuzz](exercises/fizzbuzz)
    - check mod % 3&5 / 15 first

- [06 - chunk](exercises/chunk)
    - 1: for each element unchunked, new chunk or push, check chunk length against size
    - 2: while idx < length slice array into chunked increment idx with size

- [07 - anagrams](exercises/anagrams)
    - check len strings / keys for each char map
    - 

- **[15 - runtime complexity]**
    - O(N) - **linear** 
        - directly affected 1-1 by input (string reverse: +1 char = +1 loop)
        - itterating through data (or half collection) - single for loop
    - O(N^2) = **quadratic** 
        - **nested loops** as n increases, n*n more things (steps: +1 step = +N loops)
        - handshake problem 
    - O(1) - constant time 
        - 1step (print)
    - log(n) - logarithmic 
        - search operations
    - n*log(n) - quasilinear
        - sorting operations
    - 2^n - exponential timme
        - +1 thing x2 more space