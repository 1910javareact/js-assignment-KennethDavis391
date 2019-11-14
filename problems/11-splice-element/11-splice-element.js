/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    //spread to a new array
    newArr = [...someArr]
    for( i = newArr.length - 1; i >= index; i--){
        //shift the values at index and to the right over one
        newArr[i + 1] = newArr[i]
    }
    //insert the element
    newArr[index] = "the element" //where does the element come from?
    return newArr
}
