// number
const age = 30;

// string
const name = "Jane";

// object
const fullName = { first: 'Jane', last: 'Doe' };

// boolean
const truth = true || false;

// array
const sheets = ["HTML", "CSS", "SCSS", "Script"];

// undefined
var a; typeof a;

// value
var a = null;

// if - else statement 

const person = 18;

if ((person >= 14) && (person <= 19)) {
    console.log("Eligible");
} else {
    console.log("Not eligible")
}

// Loops 
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var n = 0;

while (n < 10) {
    n++;
    console.log(n);
}


// Expression

const expr = 'Apples';

switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log("Sorry, we are out of " + expr + ".");
}


