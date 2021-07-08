function vowelFinder(){
let sentence =  prompt("Please enter a sentence").toLocaleLowerCase();
let splitted = sentence.split("");
let vowel = ["a","e","ı","i","o","ö","u","ü"];
let vowelList = [];
for (i = 0; i < splitted.length;i++){
    if (vowel.includes(splitted[i])){
        vowelList.push(splitted[i])
    }
}
unique = vowelList.filter((item,i,ar) => ar.indexOf(item) === i);
return `the vowel letters in sentence are (${unique}) and there are (${unique.length}) different vowel letter`;
}

console.log(vowelFinder())