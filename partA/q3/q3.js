// Q3. Write a JavaScript program to find the number of even digits in a given integer.

function evenDigitsInNumber(num){
    let n = parseInt(num);
    let digit=0 , count=0;
    res = [];
    while(n){
        digit = n%10;
        if(!(digit&1)){
            count +=1;
            res.push(digit);
        }
        n=Math.floor(n/10);
    }
    document.getElementById("root").innerHTML = "Count is " + count + " Even digits are:- " + res;
    
}

var input = prompt("Enter number");
evenDigitsInNumber(input);