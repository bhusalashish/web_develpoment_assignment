// Q4. Write a JavaScript program to reverse the order of the bits in a given integer. 
// Sample Example:
// 56 -> 111000 after reverse 7 -> 111
// 234 -> 11101010 after reverse 87 -> 1010111

function reverseBits(num){
    let n = parseInt(num);
    let res=0;
    while(n){
        res = res<<1;
        if(n & 1){
            res = res | 1;
        }
        n=n>>>1;
    }
    // console.log(res);
    
    document.getElementById("root").innerHTML = "<h1>Reverse of Bits of " + num + " is " + res +"</h1>";
}
input = prompt("Enter a number");
reverseBits(input);