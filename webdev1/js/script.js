
console.log("Hello World");
// alert('Please provide a username');
// This is a single line comment
/*
  This is a multi line comment
 */
// Variables in JavaScript are used to store data values.
var number = 5;
number = number + 5;
console.log(number);

// Constants in JavaScript are used to store values that do not change.
const total_marks = 100;
// total_marks = 200; // This would cause an error
console.log(total_marks);

var number = 30;
console.log('This is my second number: ' + number);

//Different data types in JavaScript
var name = "Harsh"; //String
var age = 25; //Number
var isStudent = true; //Boolean which can be either true or false
var cars = ["BMW", "Audi", "Mercedes"]; //Array
var arr = ["BMW", 0, true]; //Array
var persons = new Array("John", "Jane", "Doe"); // Anoter way of writing an Array
console.log('Cars', cars);
console.log('Displaying first car:', cars[0]);
console.log('To Display Mercedes car:', cars[2]);
console.log('Persons', persons);

//Try to display Mercedes and Jane from the above arrays.

console.log('Displaying Jane:', persons[1]);

// Objects in JavaScript
var person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log('Person:', person);
// To display only name of the person
console.log('Person Name is: ', person.name, ' and age is: ', person.age);

var students = [
    { first_name: "Andrew", last_name: "", age: 32 },
    { first_name: "John", last_name: "Doe", age: 25 },
    { first_name: "Jane", last_name: "Smith", age: 28 }
];
console.log('Students:', students);
//Display the name john and
console.log(students[1].first_name);
// jane with its age
console.log(students[2].first_name + ' is ' + students[2].age + ' years old.');

// if and else statement in JavaScript
if (isStudent) {
    console.log("My name is " + name + " I am " + age + " years old.");
} else {
    console.log("Student not found.");
}

//string vs number. Why its important.
var x = 5;
var y = "5";
console.log(x + y);

//arithemetic operators in JavaScript
var a = 15;
var b = 4;
var c = a + b; // Addition
console.log("Value of c:", c);
c = c - b; // Subtraction c -= b;
console.log("Value of c:", c);
c = c * b; // Multiplication
console.log("Multiplication example:", c);
c = c / b; // Division
console.log("Division example:", c);

var num = 20;
num += 10; //equivalent to num = num + 10;
console.log("Value of num:", num);
num -= 5; //equivalent to num = num - 5;
console.log("Value of num:", num);

num++;//num = num + 1;
console.log("Value of num:", num);
num--;//num = num - 1;
console.log("Value of num:", num);
num = 20;

if (num >= 20) {
    console.log(num + " is greater than or equal to 20");
} else if (num == 20) {
    console.log(num + " is equal to 20");
}
else {
    console.log(num + " is less than 20");
}

// difference between == and ===
if (num === "20") {
    let message = "This is my message";
    var message2 = "This is my message 2";
    console.log("Value is equal to 20");
} else {
    console.log("Value is not equal to '20'");
}
console.log(message2); // This will work because message2 is declared with var and has function scope.
// console.log(message); // This will cause an error because message is defined inside the if block and its scope is limited to that block.

//loops in JavaScript
for (var i = 0; i < 10; i++) {
    console.log("Value of i:", i);
}

//create a loop that runs from 0 to 50
// num++;//num = num + 1;
for (var i = 0; i <= 50; i = i + 5) {
    console.log("Value of i:", i);
}

for (var i = 50; i > 0; i--) {
    console.log("Value of i:", i);
}

console.log('Persons', persons);
// console.log(persons[0])
// console.log(persons[1])
// console.log(persons[2])
for (var x in persons) {
    console.log('Value of x:', x);
    console.log(persons[x]);
}

persons.forEach(function (x) {
    console.log(x);
});

//while loop in JavaScript
// var count = 0;
// while(count < 100){
//     console.log("Count is:", count);
//     count++;
// }

//count the sum of numbers till 100 using while loop
//Step 1: Am I able to run a loop from 0 to 100? - Done
//Step 2: Can I store the sum of numbers in a variable? 
var count = 0;
var sum = 0;
// while(count <= 100){
//     console.log("Count is:", count);
//     sum = sum + count;
//     console.log("Sum is:", sum);
//     count++;
// }

//count the sum of numbers till 100 using for loop
// for(var i=0; i<=50;i=i+5){
//     console.log("Value of i:", i);
// }

//do while loop in JavaScript
// var test = 0;
// do {
//     console.log("Test is:", test);
//     test++;
// } while(test > 10);

//functions in JavaScript
function hello() {
    console.log("Hello Everyone");
}

hello();

function greet(name) {
    console.log("Hello " + name);
}

greet("Harsh");
greet("Andrew");
greet("Afnan");
greet("Kobi");
greet("100");

//function to display number from 0 to n numbers
function displayNumber(num) {
    var i = 0;
    while (i <= num) {
        console.log("Value of i:" + i)
        i++;
    }
}

displayNumber(10);
displayNumber(30);
displayNumber(60);

// function to calculate grades
function calculateGrades(name, marks) {
    if (marks >= 90) {
        console.log(name + " got an A");
    } else if (marks >= 80) {
        console.log(name + " got a B");
    } else if (marks >= 70) {
        console.log(name + " got a C");
    } else {
        console.log(name + " got an F");
    }

}
calculateGrades("Alice", 95);
calculateGrades("Bob", 85);
calculateGrades("Charlie", 75);

//built in functions in JavaScript
var name = "Harsh";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

var arr = ["BMW", "Audi", "Mercedes"];
// array.push to add elements to the end of an array
arr.push("Toyota");
arr.push("Honda", "Ford");
console.log(arr);
console.log(arr.length);

var emptyArr = [];
if (emptyArr.length > 0) {
    console.log("Array is not empty");
} else {
    console.log("Array is empty");
}

arr.sort();
console.log(arr);

arr.pop(); // removes the last element from the array
console.log(arr);

arr.splice(1, 2); // removes 2 elements at index 0
console.log(arr);

var newArr = arr.slice(0, 1); // returns a new array containing the elements from index 0 to 1 (not including index 1)
console.log(newArr);
console.log(arr);



if (arr.includes("Audi")) {
    console.log("Audi is present in the array");
} else {
    console.log("Audi is not present in the array");
}

if (arr.indexOf("Audi") !== -1) {
    console.log("Audi is present in the array");
} else {
    console.log("Audi is not present in the array");
}

// Show examples of || and &&
console.log(arr.includes("BMW"));
if (true && !false) {
    console.log("This will always be true");
} else {
    console.log("This will never be executed");
}

//switch case in JavaScript
var day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    default:
        console.log("Sunday");
}

var x = 60;
// its better to use if else statement in this case.
switch (true) {
    case (x < 50):
        console.log("x is less than 50: " + x);
        break;
    case (x >= 50 && x <= 100):
        console.log("x is between 50 and 100: " + x);
        break;
    default:
        console.log("x is greater than 100: " + x);
}