function fizzBuzz(min,max) { // i get a starting and ending point
    let firstarray = []  // first we get number an create an array for later use
    let fizz = []
    let buzz = []
    let fizzbuzz = []
    for (let i = min; i < max; i++) {  
        firstarray.push(i)  // i make an array from starting point to ending point
    }
    for (let i = 0; i < max; i++) {

        if (firstarray[i] % 15 === 0) {
            fizzbuzz.push(firstarray[i])
            
        }
        else if ( firstarray[i] % 5 === 0){
            buzz.push(firstarray[i])
            
        }
        else if ( firstarray[i] % 3 === 0){
            fizz.push(firstarray[i])
           
        }

        

    }
    console.log(fizzbuzz);
    console.log(buzz);
    console.log(fizz)
    
}




