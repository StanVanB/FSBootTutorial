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

        const total_marks = 100;
        console.log(total_marks);

        var number = 30;
        console.log('This is my second number: ' + number);

        //different data types in JavaScript
        var name = "Harsh"; //String
        var age = 25; //Number
        var isStudent = true; //Boolean which can be either true or false
        var cars = ["BMW", "Audi", "Mercedes"]; //Array
        var persons = new Array("John", "Jane", "Doe"); // Anoter way of writing an Array
        console.log('Cars', cars);
        console.log('Displaying first car:', cars[0]);
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
        console.log('Person Name is: ', person.name , ' and age is: ', person.age);

        var students = [
            {first_name: "Andrew", last_name:"", age: 32},
            {first_name: "John", last_name:"Doe", age: 25},
            {first_name: "Jane", last_name:"Smith", age: 28}
        ];
        console.log('Students:', students);
        //Display the name john and
        console.log(students[1].first_name);
        // jane with its age

        console.log(students[2].first_name, ' is ', students[2].age, ' years old.');
        
        
        // if and else statement in JavaScript
        if(isStudent) {
            console.log("My name is " + name + " I am " + age + " years old.");
        } else {
            console.log("Student not found.");
        }

        // string vs number. Why it's important.
        var x = 5;
        var y = "5";
        console.log(x + y);

        // arithmetic operators in JavaScript
        var a = 15;
        var b = 4;
        var c = a + b; // Addition
        console.log("Value of c:", c);
        c = c - b; // Subtraction
        console.log("Value of c:", c);
        c = c * b; // Multiplication
        console.log("Multiplication example:", c);
        c = c / b; // Division
        console.log("Division example:", c);

        var num = 20;
        num += 10; // equivalent to num = num + 10;
        console.log("Value of num:", num);
        num++; // num = num + 1;
        console.log("Value of num:", num);
        num--; // num = num - 1;
        console.log("Value of num:", num);

        for (let i = 50; i >= 0; i -= 5) {
        console.log(i);
        }
    

        for (var i = 1; i <= 100; i++) {
            console.log(i);
        }

        // do while loop in JavaScript
        var test = 0;
        do {
            console.log("Test is:", test);
            test++;
        } while (test < 10);

        // functions in JavaScript
        function hello() {
            console.log("Hello Everyone");
        }

        hello();

        function greet(name) {
            console.log("Hello " + name);
        }

        greet("John");
        greet("Harsh");
        greet("Andrew");
        greet("Afnan");
        greet("Kobi");
        greet("100");

        // function to display number from 0 to n numbers
        function displayNumber(num) {
            var i = 0;
            while (i <= num) {
                console.log("Value of i:" + i);
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

        // built in functions in JavaScript
        const userName = "Harsh";
        console.log(userName.toUpperCase());
        console.log(userName.toLowerCase());

        var arr = ["BMW", "Audi", "Mercedes"];
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

        arr.splice(1, 2); // removes 2 elements starting from index 1
        console.log(arr);

        var newArr = arr.slice(0, 1); // creates a new array with elements from index 0 to 1 (exclusive)
        console.log(newArr);
        console.log(arr);

        // indexOf, includes, forEach, map, filter.
        // Show examples of || and &&
        // Use switch
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
        console.log(arr.includes("BMW") || arr.includes("Audi")); // true || false -> true
        if (true && !false) {
            console.log("This will always be true");
        } else {
            console.log("This will never be executed");
        }
        
        

        // Fruit array assignment

        var fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

        console.log("First fruit:", fruits[0]);
        console.log("Last fruit:", fruits[4]);

        fruits.push("Pineapple");
        console.log(fruits);

        fruits.pop();
        console.log(fruits);

        for (var i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }

        //switch case in javascript
        var today = "Wednesday";
        switch (today) {
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
            case "Sunday":
                console.log("Today is Sunday");
                break;
        }

        var x = 60;

        switch (true) {
            case (x < 50):
                console.log(x + " is less than 50");
                break;

            case (x >= 50 && x <= 100):
                console.log(x + " is between 50 and 100");
                break;

            case (x > 100):
                console.log(x + " is greater than 100");
                break;

        }

       