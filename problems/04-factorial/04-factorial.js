/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    //prevent infinite loops by making sure it's calling a non-negative number
    if (n < 0 || typeof(n) !== "number"){
        console.log(`${n} is not a valid input`);
        return
    }
    //our end case
    if(sumNum === 0){
        return 1
    }
    let newNum = sumNum * factorial(sumNum - 1)
    return newNum
}