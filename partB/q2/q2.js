// Q2. Write a JavaScript program to check whether a given string represents a correct
// sentence or not. A string is considered correct sentence if it starts with the capital
// letter and ends with a full stop (.)

function correctString(str){
    if(str[0]>='A' && str[0]<='Z' && str[str.length - 1] == '.')
        return true;
    else
    return false;
        
}

let input = prompt("Enter a sentence");
let flag = correctString(input);
var str;
if(flag) str="Sentence is correct.";
else str="Sentence is incorrect!";
document.getElementById("root").innerHTML = "<h1>" + str + "</h1>"