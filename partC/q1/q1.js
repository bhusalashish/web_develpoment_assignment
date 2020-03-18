// Q1. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function extractUnique(str){
    let arr = [];
    for(let i=0; i<128; i++){
        arr.push(0);
    }
    for(let i=0; i<str.length; i++){
        arr[str.charCodeAt(i)] = 1;
        
    }
    let res = "";
    for(let i=0; i<128; i++){
        if(arr[i] == 1){
            res = res + String.fromCharCode(i);
        }
    }
    return res;
    
}
let input = prompt("Enter a string with duplicate values");
let unique = extractUnique(input);
document.getElementById("root").innerHTML = "<h2>" + unique + "</h2>";