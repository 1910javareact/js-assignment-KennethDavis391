/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let person1 = {
    name: "Kenny",
    age: 24,
}

//constructor function
function PersonFunction(name, age) {
    this.name = name
    this.age = age
}
let person2 = new PersonFunction("Kenny", 24)

//es6 class
class PersonClass{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
let person3 = new PersonClass("Kenny", 24)