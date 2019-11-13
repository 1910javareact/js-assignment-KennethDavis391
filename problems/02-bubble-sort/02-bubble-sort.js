/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let newNumArray = []
    //loop through a number of times equal to the array length
    for(let i = 0; i < numArray.length; i++){
        let max = numArray[0]
        //loop through until you get to the numbers that are already sorted
        for(let j = 0; j < numArray.length - i; j++){
            //find the bigest value in the unsorted array
            if(numArray[j] > max){
                max = numArray[j]
            }
        }
        //set the max to the last index spot
        newNumArray[numArray.length - 1 - i] = max
    }
    return newNumArray
}