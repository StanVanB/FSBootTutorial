var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days);
console.log(days[2]);

// FOR LOOP
for (var i = 0; i < 7; i++) {
    console.log(i);
    console.log(days[i]);
    }


// FOR EACH LOOP
days.forEach(function(day, key) {
    console.log(day, key);
});

//arrow function
days.forEach((day, key) => {
    console.log(day, key);
});

function hello(name) {
    console.log("Hello " + name);
}

hello("Harsh");
hello("Andrew");
hello("John");
hello("Afnan");
hello("Kobi");

//