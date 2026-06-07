var name = "Harsh";

function greet() {
    console.log('Hello, ' + name);
}

module.exports.name = name;
module.exports.greet = greet;