// Q4. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and
// return the result.



function getSum(num1 , num2){
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    if(n1 === 0) return 0;
    while(n1%n2 ==0){
        n1 = n1/n2;
    }
    return n1;
}
first = prompt("Enter first number");
second = prompt("Enter second number");
let res = getSum(first, second);
document.getElementById("root").innerHTML = "<h1>" + res + "</h1>"