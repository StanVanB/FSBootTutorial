// console.log('Hello, World!');

function greet(name) {
    console.log('Hello, ' + name + " How are you?");
    console.log(`Hello, ${name} How are you?`)
}

greet('Alice');
greet('Bob');

// function(){
//     console.log('This is an anonymous function');
// }

// other way of writing same thing using arrow function

// () => {
//     console.log('This is an arrow function');
// }

// const name = 'Charlie';
// name = 'Dave'; // This will cause an error because 'name' is a constant variable.
// console.log(name);


var age = 30;

function displayAge() {
    var age = 25;
    let city = 'New York';
}

console.log('Outside the function: ' + age); // Output: 30
// console.log('Outside the function: ' + city); // Output: New York
displayAge(); // Output: Inside the function: 25
console.log('Outside the function: ' + age); // Output: 25


