function pythagoras(){
let pisagor = [];
let range = [];
let min = parseInt(prompt("please enter the start point number"));
let max = parseInt(prompt("please enter the ending point number"));
for (i = min; i < max; i++) {
    range.push(i)
}

for (j = 1; j < range.length; j++) {
    for (k = 1; k < range.length; k++) {
        if (k > j) {
            let p = (j ** 2 + k ** 2) ** 0.5;
            if (Number.isInteger(p)) {
                pisagor.push([j, k, p])
            }
        }
    }
}
return pisagor;
}

console.log(pythagoras())