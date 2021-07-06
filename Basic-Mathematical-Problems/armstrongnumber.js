//Amicable number check
// if a given number is amicable that mean sum of all digit's cube is equal to number itself


function armstrong() {
    let number = prompt("Please enter a number: "); // we get a number from user that will be string
    let numberDigits = [];
    let cubes = 0;
    for (i = 0; i < number.length; i++) { // with this loop we put every single digits of given number in string type
        numberDigits.push(number[i]);
    }

    for (i = 0; i < numberDigits.length; i++) {
        cubes += numberDigits[i] ** 3;  // we added cubes of each digits to cubes variable
    }

    if (isNaN(number)) {
        return `${number} is not a numeric value`
    } else if (cubes === Number(number) ) {  // if numeric number and the cubes of each digit is equal than it is armstrong number
        return `${number} is an ARMSTRONG number`
    } else {
        return `${number} is NOT an armstrong number`
    }
}

console.log(armstrong())

// most famous armstron numbers are 1,153,370,371,407