var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// cmd compile -> npx tsc typeScript.ts
debugger;
console.log("Hello from TS");
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
// Primitives
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
// person = {
//   isEmployee: true
// };
var people;
// Type inference
var course = 'React - The Complete Guide';
course = 12341;
// Functions & types
function add(a, b) {
    return a + b;
}
add(1, 2);
function printValue(value) {
    console.log(value);
}
printValue("Hi from TS");
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split('');
