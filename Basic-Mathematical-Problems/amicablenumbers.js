// amicable numbers are the numbers which divisions of them are equal to one another's actual value
// with this function we check if two given number are amicable or not
// most known amicable number paris are ==>  (220,284) (1184,1210) (2620,2924) (5020,5564)

function amicable() {
    let num1 = Number(prompt("please enter the first number: "))
    let num2 = Number(prompt("please enter the second number: "))
    let num1Array = [];
    let num2Array = [];
    let message;
    for (let i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            num1Array.push(i)
        }
    }
    for (let i = 1; i < num2; i++) {
        if (num2 % i === 0) {
            num2Array.push(i)
        }
    }
    sum1 = num1Array.reduce((a, b) => a + b, 0)
    sum2 = num2Array.reduce((a, b) => a + b, 0)

    if (sum1 === num2 && sum2 === num1) {
        message = "Your numbers are amicable"
    } else {
        message = "Your numbers are not amicable"
    }
    return message
}

console.log(amicable())