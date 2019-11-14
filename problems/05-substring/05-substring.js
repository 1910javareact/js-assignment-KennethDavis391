/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    //check the input
    if(typeof(someStr) !== "string"){
        throw "Input is not a String"
    }
    if(startIndex > endIndex){
        throw "Start Index is greater than End Index"
    }

    let newStr = ""
    //start at startIndex and add letters until you reach endIndex (exclusive)
    for(let i = startIndex; i < endIndex; i ++){
        newStr = newStr.concat(someStr.charAt(i))
    }
    return newStr
}