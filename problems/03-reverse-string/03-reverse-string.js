/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let newStr = ""
    for(let i = 0; i < someStr.length; i++){
        newStr = newStr.concat(someStr.charAt(someStr.length - 1 - i))
    }
    
    return newStr
}
