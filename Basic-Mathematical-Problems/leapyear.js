// Leap year is year that divisible to 4,100 and 400

let year = Math.round(Math.abs(prompt("please enter a year:"))); // assigning given number to a variable

function leap(year){
    if (isNaN(year)){
        return("Please enter a numeric value") // checking whether the value is numeric or not
    }
    else if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0){ // checking the conditions
        return `${year} is a leap year`
    }
    
    else{
        return `${year} is not a leap year`
    }

}

console.log(leap(year))