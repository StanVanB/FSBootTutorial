var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days);

//for loop
for(var i = 0;i < days.length;i++){
    console.log(days[i]);
}

//foreach loop
days.forEach(function(day, index){
    console.log(index, day);
});

//arrow function
days.forEach((day, index) => {
    console.log(index, day);
});

function hello(name){
    console.log("Hello " + name);
}

hello("John");

var helloArrow = (name) => {
    console.log("Hello " + name);
};

helloArrow("Jane");

//for of loop
for(var day of days){
    console.log(day);
}