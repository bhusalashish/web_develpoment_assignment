// Q3. Write a JavaScript function which says whether a number is perfect.
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors,
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive
// divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This
// is followed by the perfect numbers 496 and 8128.

function isPerfect(num){
    let n =parseInt(num);
    sum = 1;
    for(let i=2; i*i <=n; i++){
        if(n%i ==0){
            sum+=i;
            sum+= n/i;
        }
    }
    if(sum == n) return true;
    else return false;
}

console.log(isPerfect(6));      //true
console.log(isPerfect(496));   //true
console.log(isPerfect(15));     //false

