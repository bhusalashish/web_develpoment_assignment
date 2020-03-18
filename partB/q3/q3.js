// Q3. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where
// n is a positive integer and all divisions are integer.

function getSum(num){
    let n = parseInt(num);
    let sum = n;
    while(n>0){
        sum = sum + Math.floor(n/2);
        n = Math.floor(n/2);
    }
    return sum;
}
input = prompt("Enter a number");
let sum = getSum(input);
document.getElementById("root").innerHTML = "<h1>" + sum + "</h1>"