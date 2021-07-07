// Fibonacci squence means that each number is the sum of two preceding ones 
// we get a limit from user and find the fibonacci sequence until that number


function fibonacci() {
    let limit = parseInt(prompt("How many number do you want to get in fibonacci sequence?")); // we get a limit
    numberRange = [];
    fibonacciSequence = [1];  // i put a default 1 to sequence
    let a = 0;
    let b = 1;
    let c;
    for (i = 0; i < limit; i++) {
        numberRange.push(i)
    }
    if (isNaN(limit)) {
        return "please enter a numeric value"
    } else if (limit < 1) {
        return "please enter a positive value"
    } else {
        for (i = 0; i < numberRange.length -1 ; i++) { // i put an -1 to sequence just because there is a default value
            c = a + b;
            fibonacciSequence.push(c);
            a = b;
            b = c;
        }
        return `the fibonacci squence with ${limit} number is ${fibonacciSequence}`;
    }
}

console.log(fibonacci())