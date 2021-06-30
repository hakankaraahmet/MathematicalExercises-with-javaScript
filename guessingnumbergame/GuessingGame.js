
function ran() {
    let start = Number(document.getElementById("scalestart").value);
    let end = Number(document.getElementById("scaleend").value);
    let myguess = Number(document.getElementById("number").value);
    let random = Math.floor((Math.random() * (end-start + 1) + start ));
    if (myguess === random){
        document.getElementById("result").innerHTML = `BINGO!!! your guess is true`
    }
    else if (myguess < start || myguess > end){
        document.getElementById("result").innerHTML = `Your Guess is not in range. Please Enter a valid number.`
    }
    else if(isNaN(start) ||  isNaN(end) ||  isNaN(myguess)){
        window.alert("Your entry is not a number")
    }
    else{
        document.getElementById("result").innerHTML = `WRONG!!! True number is ${random} `
    }
}

