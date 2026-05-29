var name = "Harsh";

function greet() {
    console.log('Hello, ' + name);
}

console.log(module);
module.exports.name = name;
module.exports.greet = greet;
console.log(module);
