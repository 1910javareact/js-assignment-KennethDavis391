/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    //loop through the keys
    for (const key in someObj) {
        //print the keys with their values
        console.log(`${key}: ${someObj[key]}`);
    }
}