function evenOdd() {
    let evenArray = [];
    let oddArray = [];
    evenSum = 0;
    oddSum = 0;
    for (i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return "All elements must be numeric"
        } else {
            arguments[i] % 2 === 0 ? (evenArray.push(arguments[i]), evenSum += arguments[i]) : 
            (oddArray.push(arguments[i]),oddSum += arguments[i]);
        }
    }
    return{arguments,evenArray,evenSum,oddArray,oddSum }
}
console.log(evenOdd(2, 6, 85, 69, 36, 42, 65))


