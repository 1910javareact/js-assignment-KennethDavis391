/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let newNumArray = [...numArray]
    //loop through a number of times equal to the array length
    for(let i = 0; i < numArray.length; i++){
        let maxIndex = 0
        //loop through until you get to the numbers that are already sorted
        for(let j = 0; j < newNumArray.length - i; j++){
            //find the bigest value in the unsorted array
            if(numArray[j] > newNumArray[maxIndex]){
                maxIndex = j
            }
        }
        //swap the max with the last index spot
        let temp = newNumArray[maxIndex]
        newNumArray[maxIndex] = newNumArray[newNumArray.length - 1 - i]
        newNumArray[newNumArray.length - 1 - i] = temp
    }
    return newNumArray
}
