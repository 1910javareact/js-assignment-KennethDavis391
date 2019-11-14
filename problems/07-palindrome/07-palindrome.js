/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    newStr = someStr.toLowerCase()
    //loop through the front half and make sure it's equal to the second half
    for(let i = 0; i < newStr.length/2; i++){
        if(newStr.charAt(i) !== newStr.charAt(newStr.length - 1 - i)){
            return false
        }
    }
    //if you get past the for loop without returning false then it must be a palindrome
    return true
}