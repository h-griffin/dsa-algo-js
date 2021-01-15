### runtime complexity
- O(N) - linear 
    - **single for loop**
    - directly affected 1-1 by input (string reverse: +1 char = +1 loop)
    - iterating through data (or half collection) 

- O(N^2) = quadratic 
    - **nested loops** as n increases, n*n more things 
    - handshake problem - (stairs: +1 step = +N loops)

- O(1) - constant time 
    - 1step (**print**)

- log(n) - logarithmic 
    - **search** operations

- 0(n*log(n)) - quasilinear
    - **sorting** operations

- 2^n - exponential time
    - +1 thing x2 more space
    - bad bad never use

- O(n+m) 
    - **two separate for loops**
    - iterate through two different collections

- O(n*m) 
    - **two separate nested for loops** 
    - two different collections

- RECURSIVE
    - typically O(N) linear
    - one for loop O(N^2) quadratic
    - divide next call O(log(n)) logarithmic
    - call twice O(2^n) exponential


### space complexity
- typically same as time complexity, look into later 