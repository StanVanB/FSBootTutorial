"use strict";
let x = 10;
x = 20;
// x = "30"; // This will cause a type error because x is declared as a number. Why? bcuz we assigning string value to a number value.
let username = "John";
username = "123";
//  name = 123; // This will cause a type error because name is declared as a string. Why? bcuz we assigning number value to a string value.
let isActive = true;
isActive = false;
// isActive = "true"; // This will cause a type error because isActive is declared as a boolean. Why? bcuz we assigning string value to a boolean value.    
let cars = ["BMW", "Audi", "Mercedes"];
let num = [1, 2, 3, 4, 5];
// or another way of declaring an array of numbers is:
let anotherNum = [6, 7, 8, 9, 10];
let studentMarks = 90;
studentMarks = "A";
// OR
// type Person = {
//     name: string;
//     age: number;
//     email: string;
//     isStudent: boolean;
// }
let person = { name: "Harsh", age: 25, email: "harsh@example.com", isStudent: true };
let person2 = { name: "George", age: 25, email: "george@example.com", isStudent: false };
let persons = [
    { name: "Alice", age: 30, email: "alice@example.com", isStudent: false },
    { name: "Bob", age: 22, email: "bob@example.com", isStudent: true },
    { name: "Charlie", age: 28, email: "charlie@example.com", isStudent: false }
];
// OR 
let persons2 = [
    { name: "Alice", age: 30, email: "alice@example.com", isStudent: false },
    { name: "Bob", age: 22, email: "bob@example.com", isStudent: true },
    { name: "Charlie", age: 28, email: "charlie@example.com", isStudent: false }
];
function greet(name) {
    return "Hello, " + name + "!";
}
greet("Alice"); // This will return "Hello, Alice!"
