// Q1. Write a JavaScript program to change the characters (lower case) in a string where a turns into z,
// b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 

function changeString(str){
    str = str.toLowerCase();
    let res="";
    let ch;
    for(let i=0; i<str.length; i+=1){
        ch = str.charCodeAt(i);
        ch = 122-ch+97;
        res+=String.fromCharCode(ch);
    }
    document.getElementById("root").innerHTML = res;
}

str = prompt("Type the string");
changeString(str);