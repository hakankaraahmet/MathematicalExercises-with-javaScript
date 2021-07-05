//a perfect number is a positive integer that is equal to 
//the sum of its positive divisors, excluding the number itself

function perfect() {
    let num = Number(prompt("please enter a number: "));
    let divisors = []; 
    for(i = 0; i < num; i++){
        if (num % i === 0){
            divisors.push(i)
        }
    }
    sumOfDivisors = divisors.reduce((a,b) => a+b);  // summing of elements of divisors array
    if(isNaN(num)){
        return "please enter a numeric value" // checkin numeric value
    }
    else{
        // checking the equality of sum of divisor and number
        return sumOfDivisors === num ? "Your number is PERFECT" : "Your number is NOT perfect";
    }
}

console.log(perfect())

// Most popular perfect numbers are 6,28,496,8128 ....