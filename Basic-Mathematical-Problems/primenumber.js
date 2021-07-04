// Prime number is a number that diviseble to only itself and 1

let number = Math.round(prompt("Please enter a number:"));

function prime(number) {
    if (number === 2) {
        return `${number} is prime`
    } else if (number <= 1) {
        return `${number} is smaller than 1 please enter a bigger number`
    } else {
        for (i = 2; i < number ;i++){
            return (number % i === 0) ? `${number} is not prime` : `${number} is prime`;
        }
    } 
}

console.log(prime(number))