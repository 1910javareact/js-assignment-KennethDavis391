/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    //check if it can divide evenly into 2, if not its odd
    if(Number.isInteger(someNum/2)){
        return true
    }else{
        return false
    }
}