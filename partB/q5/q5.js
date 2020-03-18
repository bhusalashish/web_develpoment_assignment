// Q5. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
// Test Data :
// console.log(dec_to_bho(120,'B')); 
// console.log(dec_to_bho(120,'H')); 
// console.log(dec_to_bho(120,'O'));
// "1111000" 
// "78" 
// "170"
// 

function dec_to_bho(num, base){
    let b;
    if(base == "B") b = 2;
    else if(base == "H") b = 16;
    else if(base == "O") b = 8;
    else return -1;
    return num.toString(b);
}


console.log(dec_to_bho(120,'B')); 
console.log(dec_to_bho(120,'H')); 
console.log(dec_to_bho(120,'O'));