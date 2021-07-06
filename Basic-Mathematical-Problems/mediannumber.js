// Median Number
// Median number is the middle element of a number list

function median() {
    firstArray = [];

    for (i = 0; i < arguments.length; i++) { // we push all arguments to a list
        if (typeof arguments[i] === "string" || typeof arguments[i] === "undefined" || typeof arguments[i] === "boolean") {
            return "there are entries other than number" // we check if there is any entry which is not number
        } else {
            firstArray.push(arguments[i]) // if all entries are number than we are going through
        }
    }
    sorted = firstArray.sort((a, b) => a - b) // we sort the given number in a query

    if (arguments.length === 0) {
        return 0
    } else if (sorted.length % 2 === 0) {  // if the length the list of numbers are even
        return [sorted[(sorted.length / 2) - 1], sorted[sorted.length / 2]]
    } else {
        return sorted[Math.floor(sorted.length / 2)] // if the length the list of numbers are odd
    }
}

console.log(median(2,4,5,7))