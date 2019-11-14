/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    //spread to a new array
    newArr = [...someArr]
    for( i = index; i < newArr.length; i++){
        //shift the values at index and to the right over one
        newArr[i] = newArr[i + 1]
    }
    //remove the last element in the array so we don't get undefined
    newArr.pop()
    return newArr
}