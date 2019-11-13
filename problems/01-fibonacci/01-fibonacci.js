/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    //prevent infinite loops by making sure it's calling a number in the sequence
    if (n < 1){
        console.log(`${n} is not a valid input`);
        return
    }
    //check the first two numbers outside of the loop so that we can have a staring point
    if (n == 1){
        return 0
    }
    if (n == 2){
        return 1
    }
    //set the first two numbers in the sequence and denote that it's not one of them by initializing counter at 2
    let counter = 2
    let last = 0
    let current = 1
    //loop through keeping track of the current number and the number before it between loops
    while(counter != n){
        let temp = current
        current = current + last
        last = temp
        counter++
    }
    //return what you found
    return current
}