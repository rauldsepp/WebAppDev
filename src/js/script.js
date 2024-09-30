let userName = "Andrew"
let userAge = 21
let userPets = ["cat", "dog"]
let userBalance = 1200
const EVERY_DAY_SPENDING = 15.3
let everyDaySpendingPerPet = 2.4
let daysSurvived = 0

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User Balance", userBalance)
console.log("Every Day Spending Per Pet", everyDaySpendingPerPet)
console.log("Days Survived", daysSurvived)

while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days");

function nameVertical(name) {
    console.log(name);
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
// Sarah for example
nameVertical("Sarah");

function code(n) {
    return (n < 100 || n > 599) ? "Not a valid code" : (n > 99 && n < 200) ? "Informational responses" : (n > 199 && n < 300) ? "Successful responses" :
        (n > 299 && n < 400) ? "Redirection messages" : (n > 399 && n < 500) ? "Client error responses" : (n > 499 && n < 600) ? "Server error responses" : "Not a valid code";
}
// for example n = 121
console.log(code(121));

function compareVariables(var1, var2) {
    (var1 === var2) ? console.log("The two variables have the same value and type") :
        (var1 == var2) ? console.log("The two variables have the same value but not the same type", "the type of var1 is", typeof var1, "the type of var2 is", typeof var2) :
            console.log("The two variables do not have the same value nor the same type");
}

// After completing the function pass different values instead of var1 and var2 to test your function
compareVariables (23, "23");

function fibonacci(n) {
    let fibSequence = [0, 1];
    let nextFib = fibSequence[0] + fibSequence[1];

    while (nextFib <= n) {
        fibSequence.push(nextFib);
        nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    }

    console.log("Fibonacci Sequence: " + fibSequence.join(", "));
}

// After completing the function pass different numbers instead of n and test the result.

fibonacci(55);