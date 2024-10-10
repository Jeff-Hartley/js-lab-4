
//declaring and invoking functions
//arrow function
let greet = (name) => {
    if (name == null) {
    return console.log("Hello stranger!");
} else {
    return console.log(`Hello ${name}!`);
}
}

greet();
greet("Vin Diesel");
console.log(" "); // used to create a gap in console

//working with parameters and returning values

let addNumbers = (num1, num2) => {
    return console.log(num1 + num2);
}

console.log("Working with parameters, the console should return the sum of num1 and num2, which are going to be 3 and 5 respectively.");
addNumbers(3, 5);

//function scope
console.log(" "); // used to create a gap in console

let x = 10;
console.log(`I made a global variable named X that has a value of ${x}`);

let changeValue = () => {
    x = 15;
    return console.log(`I changed the value of X to be ${x} using function scope.`);
}

changeValue();
console.log(" "); // used to create a gap in console

// closures

let outerFunction = () => {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let counter = outerFunction();

console.log("The following numbers will change by 1 everytime they are called.");
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let newOuterFunction = () => {
    let count = 2;
    return function() {
        count = count * 2;
        return count;
    };
}

console.log(" "); // to create a gap in the console 

let newCounter = newOuterFunction();

console.log("For the bonus challenge, the following numbers will double itself");
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

