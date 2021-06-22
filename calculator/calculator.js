function show(par1,par2){
    document.getElementById(par1).innerHTML = par2;
}



var note = 60 
function noteResult(){
    var midtermNote,finalNote,message,average;
    midtermNote = Number (document.getElementById("midterm").value);
    finalNote = Number (document.getElementById("final").value);
    average = midtermNote * 0.3 + finalNote * 0.7; 
    if(isNaN(midtermNote)){
        message = ("Please enter a numeric midterm note")
    }
    else if(isNaN(finalNote)){
        message = ("Please enter a numeric final note")
    }
    else {
        message = (average >= 60) ? `You pass the exam. your average note is : ${average.toFixed(2)}` : `You failed. Your average note is: ${average.toFixed(2)} `;
    }   
    show("result",message)
}