let number = 73; // assigning number

if (number > 0) {
    console.log(number + " is a positive number.");
} else if (number < 0) {
    console.log(number + " is a negative number.");
} else {
    console.log(number + " is zero.");
}

let day = 6; // assigning number between 1 and 7

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Frday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}

//for loop
for (let n = 1; n <= 5; n++) {
    console.log(n);
}

//while loop
let n = 1;
while (n <= 5) {
    console.log(n);
    n++;
}

//do while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

//for loop with break
for (let n = 1; n <= 5; n++) {
    if (n === 4) {
        break; //exit the loop when i equals 4
    }
    console.log(n);
}

//for loop with continue
for (let n = 1; n <= 5; n++) {
    if (n === 3) {
        continue; //skip the number 3 when i equals 3
    }
    console.log(n);
}

let globalVar = "I'm global!";  //global variable

function scopeExample() {
    let localVar = "I'm local!";  //local variable
    console.log(globalVar);  //accessible inside the function
    console.log(localVar);   //accessible inside the function
}

scopeExample();  //calling function

//accessing variables outside the function
console.log(globalVar);  //accessible outside the function
//console.log(localVar);   //this will give error because localVar is out of scope, I commented it out so program can run
