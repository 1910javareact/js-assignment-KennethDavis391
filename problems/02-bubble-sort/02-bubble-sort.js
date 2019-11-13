/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    //loop through a number of times equal to the array length
    for(let i = 0; i < numArray.length; i++){
        let max = numArray[0]
        let maxIndex = 0
        //loop through until you get to the numbers that are already sorted
        for(let j = 0; j < numArray.length - i; j++){
            //find the bigest value in the unsorted array
            if(numArray[j] > max){
                max = numArray[j]
                maxIndex = j
            }
        }
        //swap the max with the last index spot
        let temp = max
        numArray[maxIndex] = numArray[numArray.length - 1 - i]
        numArray[numArray.length - 1 - i] = temp
    }
    return numArray
}